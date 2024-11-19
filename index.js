import express from "express";
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
const port = 5000;
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());


app.use(fileUpload({
  // limits: { fileSize: 5 * 1024 * 1024 },
}));

mongoose.connect('mongodb+srv://rulokifs:mongodb@cluster0.xlryd.mongodb.net/Shops').then((val) => {
  app.listen(port, () => {
    console.log('listening and connected');
  });
}).catch((err) => {
  console.log(err);
});




// app.use(authRoutes);
// app.use(productRoutes);
app.use('/api/users', authRoutes);   ///api/users to connect endpoint + usercontroller.js ko signup or log
app.use('/api/products', productRoutes);




