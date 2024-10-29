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
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: error?.message });
        console.error("Internal server error: " + error?.message);
    }
};

const updateTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        );

        res.status(200).json(updatedTask);
    }
    catch (error) {
        res.status(500).json({ error: error?.message });
        console.error("Internal server error: " + error?.message);
    }
};

const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Task deleted" });
    }
    catch (error) {
        res.status(500).json({ error: error?.message });
        console.error("Internal server error: " + error?.message);
    }
};

export {
    createTask,
    allTask,
    updateTask,
    deleteTask 
};