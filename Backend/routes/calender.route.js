import express from 'express';
import { createCalender, deleteCalender, getAllCalenders } from '../controller/calender.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router();

router.route('/createCalender').post(isAuthenticated,createCalender);
router.route('/getAllCalender').get(getAllCalenders);
router.route('/deleteCalender/:id').delete(isAuthenticated ,deleteCalender);

export default router;