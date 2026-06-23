import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express(); // Pehle app initialize hogi

// Middleware (Inhein sabse upar hona chahiye)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Routes (Middleware ke baad)
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes); // Ab ye sahi jagah hai!

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });