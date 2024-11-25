import express from 'express';
import { getAllOrder } from '../Controllers/orderController.js';
import { userCheck, adminCheck } from '../middleware/authCheck.js';



const router = express.Router();

router.route('/').get(userCheck, adminCheck, getAllOrder);

export default router;
