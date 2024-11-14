import express from "express";
import productRoutes from './Routes/productRoutes.js';
import authRoutes from './Routes/authRoutes.js';
import mongoose from "mongoose";
import cors from 'cors';

const port = 5000;

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://rulokifs:mongodb@cluster0.xlryd.mongodb.net/Shops').then((val) => {
  app.listen(port, () => {
    console.log('listening and connected');
  });
}).catch((err) => {
  console.log(err);
});




app.use(express.json());
// app.use(authRoutes);
// app.use(productRoutes);
app.use('/api/users', authRoutes);   ///api/users to connect endpoint + usercontroller.js ko signup or log
app.use('/api/products', productRoutes);




