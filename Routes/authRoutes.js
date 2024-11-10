import express from 'express';

import { loginUser, signUpUser } from '../Controllers/userController.js';
const router = express.Router();

router.route('/users/log').post(loginUser); //post hunu parxa  db bata taney ko lagi 
router.route('/users/signup').post(signUpUser);

export default router;