import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Server started...");
});

app.listen(3001, () => console.log(`Server is up running on port:3001`));