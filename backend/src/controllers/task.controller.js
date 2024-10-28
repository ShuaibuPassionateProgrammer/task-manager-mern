import Task from "../models/task.model.js";

const createTask = async (req, res) => {
    try {}
    catch (error) {
        res.status(500).json({ error: error?.message });
        
    }
};

const allTask = async () => {};

const updateTask = async () => {};

const deleteTask = async () => {};

export {
    createTask,
    allTask,
    updateTask,
    deleteTask 
};