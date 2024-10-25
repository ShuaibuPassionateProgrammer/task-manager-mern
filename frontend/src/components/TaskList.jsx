import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from '../api';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task._id} task={task} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default TaskList;