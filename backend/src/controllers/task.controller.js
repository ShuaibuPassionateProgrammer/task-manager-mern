import Task from "../models/task.model.js";

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newTask = new Task({
            title,
            description
        });

        await newTask.save();
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(500).json({ error: error?.message });
        console.error("Internal server error: " + error?.message);
    }
};

const allTask = async (req, res) => {
    try {}
    catch (error) {
        
    }
};

const updateTask = async () => {};

const deleteTask = async () => {};

export {
    createTask,
    allTask,
    updateTask,
    deleteTask 
};