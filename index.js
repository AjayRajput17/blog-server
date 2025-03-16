import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import blogRoutes from './routes/blogs.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({limit: "10mb"}));
app.use(cors({
  // origin: ['http://localhost:3000'],
  origin: ['https://3.110.92.43','http://localhost:3000'],
  credentials: true,
}));

// app.use(cors({
//   origin: '*',
//   credentials: true,
// }));

app.use(cookieParser());
app.use(express.urlencoded({limit: '10mb', extended: true}));

app.use('/blog', blogRoutes);
app.use('/auth', userRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(port,'0.0.0.0', ()=> console.log(`Server is listening on port: ${port}`)))
  .catch((error) => console.log(`${error} did not connect`));
 