import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Task from "./models/task.model.js";

dotenv.config();
const port = process.env.PORT || 4000;

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server started...");
});

app.listen(port, () => {
    connectDB();
    console.log(`Server is up running on port:${port}`)
});