import express from "express";
import productRoutes from './Routes/productRoutes.js';
import authRoutes from './Routes/authRoutes.js';
import mongoose from "mongoose";
const port = 5000;

const app = express();

//const numbers = [11, 22, 33, 44, 55];


// const func = (number) => {
//   console.log(number + 9);
// }

// numbers.forEach(func);

// numbers.forEach((a) => {
//   func(a);
// });
mongoose.connect('mongodb+srv://rulokifs:mongodb@cluster0.xlryd.mongodb.net/Shops').then(val =>{
  app.listen(port, () => {
    console.log('listening & connected');
  });
}).catch((errss) =>{
  console.log(errss);
})





























app.use(express.json());
app.use(authRoutes);
app.use(productRoutes);




