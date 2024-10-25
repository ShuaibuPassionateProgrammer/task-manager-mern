import React, { useState } from 'react';
import { createTask } from '../api';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the new task data
    const newTask = { title, description };

    try {
      // Create the new task via the API
      const savedTask = await createTask(newTask);

      // Call the parent function to update the tasks list (optional if you're using reload)
      onTaskAdded(savedTask);

      // Clear the form inputs
      setTitle('');
      setDescription('');

      // Forcefully reload the page to fetch updated tasks
      window.location.reload();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;