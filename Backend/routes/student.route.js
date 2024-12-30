import express from "express";
import { createStudent } from "../controller/student.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.route("/createStudent").post(isAuthenticated, createStudent);

export default router;