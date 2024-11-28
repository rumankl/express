import express from 'express';
import { addOrder, getAllOrder } from '../Controllers/orderController.js';
import { userCheck, adminCheck } from '../middleware/authCheck.js';



const router = express.Router();

router.route('/').get(userCheck, adminCheck, getAllOrder).post(userCheck, addOrder);;

export default router;
