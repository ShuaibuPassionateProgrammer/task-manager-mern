import express from "express";
import { createTask, getTask, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTask);

export default router;