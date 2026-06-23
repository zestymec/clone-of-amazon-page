import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

// SIGNUP: Simple logic
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check agar user pehle se exist karta hai
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Already exist" });
  }

  // Naya user banao
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  
  res.status(201).json({ message: "Signup successful" });
});

// LOGIN: Simple logic
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check agar user exist karta hai ya nahi
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "Not exist" });
  }

  // Password match check
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login successful", username: user.username });
});

export default router;