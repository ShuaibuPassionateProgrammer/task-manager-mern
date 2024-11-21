import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { fetchTasks } from './api'; // Import the function to fetch tasks

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks when the component mounts
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Add the new task to the list and update the state
  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Add the new task to the existing tasks
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-700">Task Manager</h1>
        <TaskForm onTaskAdded={handleTaskAdded} /> {/* Pass the callback to update tasks */}
        <TaskList tasks={tasks} /> {/* Pass tasks to TaskList component */}
      </div>
    </div>
  );
};

export default App;