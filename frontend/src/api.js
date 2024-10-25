import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

// Get all tasks
export const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Create a new task
export const createTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

// Update a task
export const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;
};

// Delete a task
export const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  };