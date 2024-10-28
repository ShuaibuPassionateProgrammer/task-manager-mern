import Task from "../models/task.model.js";

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        const task = new Task({
            title: title,
            description: description
        });
    }
    catch (error) {
        res.status(500).json({ error: error?.message });
        console.error("Internal server error: " + error?.message);
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