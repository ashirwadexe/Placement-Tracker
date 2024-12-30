import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});