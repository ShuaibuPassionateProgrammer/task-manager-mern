import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
    res.send("Server started...");
});

app.listen(port, () => console.log(`Server is up running on port:${port}`));