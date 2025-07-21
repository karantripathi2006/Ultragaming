
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/User.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Logininfo')  
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json({ success: false, message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.json({ success: false, message: "Invalid password" });

  const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });

  res.json({
    success: true,
    message: "Login successful",
    token,
    user: { email: user.email }
  });
});
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.json({ success: false, message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10); 

  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();

  res.json({ success: true, message: "User registered successfully" });
});

app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashed });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});
app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
});
