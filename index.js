import express from "express";
import productRoutes from './Routes/productRoutes.js';
import authRoutes from './Routes/authRoutes.js';
import mongoose from "mongoose";
const port = 5000;

const app = express();

mongoose.connect('mongodb+srv://rulokifs:mongodb@cluster0.xlryd.mongodb.net/Shops').then((val) => {
  app.listen(port, () => {
    console.log('listening and connected');
  });
}).catch((err) => {
  console.log(err);
});




app.use(express.json());
app.use(authRoutes);
app.use(productRoutes);




