const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/SocailMedia").then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/api/user', userRoutes);


app.listen(3000, () => {
  console.log('Server started on port http://localhost:3000');
});
