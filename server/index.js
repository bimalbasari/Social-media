const express = require('express');
const cors = require('cors');
const multer = require("multer");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const Place = require("./models/Place");
const fs = require("fs");
const authMiddleware = require("./middlewares/authMiddleware");

const PORT = process.env.PORT || 3001;
const jwtSecret = process.env.SERECTKEY;

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




const storage = multer.diskStorage({

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const photosMiddleware = multer({ storage });




app.post('/places', authMiddleware, photosMiddleware.array('photos', 4),  async (req, res) => {
  // addedPhotos,
  try {
    const {  title, address, description, perks, extraInfo, checkIn, checkOut, maxGuests, price } = req.body;
    const userID = req.userId;
    const uploadedfiles = []
    for (let i = 0; i < req.files.length; i++) {
      let img = fs.readFileSync(req.files[i].path);
      uploadedfiles.push(img);
    }
    const placeDoc = await Place.create({
      owner: userID,
      photos: uploadedfiles,
      title, address, description,
      perks, extraInfo, checkIn,
      checkOut, maxGuests, price

    });
    res.json(placeDoc);

  } catch (err) {
    console.log(err)
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
