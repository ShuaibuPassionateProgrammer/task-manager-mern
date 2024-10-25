import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/taskRoutes.js";

dotenv.config();
const port = process.env.PORT || 4000;

const app = express();

// Middle ware
app.use(cors());
app.use(express.json());

// Routes 
app.use("/api/tasks", router);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log("MongoDB connection error: " + error));

app.listen(port, () => {
    console.log(`Server started at http://127.0.0.1:${port}`);
});