import express from 'express';

import { loginUser, signUpUser } from '../Controllers/userController.js';
// import { somware } from '../middleware/filecheck.js';
import Joi from 'joi';
import validator from 'express-joi-validation';

const validate = validator.createValidator({});


const signUpSchema = Joi.object({
  fullname: Joi.string().min(4).max(25).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(25).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(25).required(),
});

const router = express.Router();

router.route('/log').post(validate.body(loginSchema), loginUser); //post hunu parxa  db bata taney ko lagi 
// router.route('/users/signup').post(somware, signUpUser);///somware checkker ho or to check it

// router.route('/users/signup').post(validate.body(signUpSchema), signUpUser); //- /users chai hamiley index.js ko app.use('/api/users', authRoutes); haleko

router.route('/signup').post(validate.body(signUpSchema), signUpUser);
export default router;
