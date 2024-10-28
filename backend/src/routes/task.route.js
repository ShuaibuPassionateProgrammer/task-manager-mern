import express from "express";
import { createTask, allTask, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", allTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;