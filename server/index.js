const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');


const PORT = process.env.PORT || 3001;


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/SocailMedia").then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});


const app = express();

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/api/user', userRoutes);



app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
