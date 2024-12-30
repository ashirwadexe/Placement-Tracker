import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import adminRouter from "./routes/admin.route.js";
import studentRouter from "./routes/student.route.js";
import cors from "cors";
import cookieParser from 'cookie-parser';

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser()); 

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);

//apis
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/admin/student", studentRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});