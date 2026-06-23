import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';


app.use('/api/auth', authRoutes);


const app = express();

// Middleware
app.use(cors({
  origin: "*", // Sabhi sources se request allow karega
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json()); // JSON data read karne ke liye
app.use(express.urlencoded({ extended: true }));

// Routes
// Note: router.post wala code ab sirf 'productRoutes.js' mein rahega
app.use('/api/products', productRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });