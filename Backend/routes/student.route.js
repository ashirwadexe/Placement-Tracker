import express from "express";
import { createStudent, getAllStudents } from "../controller/student.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.route("/createStudent").post(isAuthenticated, createStudent);
router.route("/getAllStudents").get(getAllStudents);

export default router;