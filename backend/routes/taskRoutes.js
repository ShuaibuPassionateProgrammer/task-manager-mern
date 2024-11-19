import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;



// import express from "express";
// import Task from "../models/Task.js";

// const router = express.Router();

// // create a new task
// router.post("/", async (req, res) => {
//     const {title, description} = req.body;

//     try {
//         const newTask = new Task({title, description});
//         await newTask.save();
//         res.status(201).json({success: true, data: newTask});
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// });

// // Get all task
// router.get("/", async (req, res) => {
//     try {
//         const task = await Task.find({});
//         res.status(201).json({success: true, data: task});
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// });

// // Update a task
// router.put("/:id", async (req, res) => {
//     const {title, description} = req.body;

//     try {
//         const updatedTask = await Task.findByIdAndUpdate(req.params.id, {title, description}, {new: true});
//         res.status(201).status({success: true, message: "Task updated"});
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// });

// // Delete a task
// router.delete("/:id", async (req, res) => {
//     try {
//         await Task.findByIdAndDelete(req.params.id);
//         res.json({message: "Task deleted"});
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// });

// export default router;