const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// 1. ADD THIS LINE (Imports your routes file)
const authRoutes = require('./routes/authRoutes'); 

dotenv.config();

const app = express();

// Middleware to read JSON bodies
app.use(express.json());

// 2. ADD THIS LINE (Mounts your routes)
app.use('/api/auth', authRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB Atlas!'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});