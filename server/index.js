const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/SocailMedia").then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port http://localhost:3000');
});
