const express = require('express');
const multer = require("multer")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userController = require("../controllers/userControllers")
const User = require('../models/user.model');


const router = express.Router();
const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, "uploads");
  // },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
// user signup route
// 
router.post('/signup', upload.single("picture"), userController.createUser);


// User login
router.post('/login', userController.userLogin)

// Listings

router.post('/listings', upload.single("picture"),userController.listingProperty );

module.exports = router;



// async (req, res) => {
//   try {
//     const {  firstName,
//       lastName,
//       email,
//       mobile,
//       password } = req.body;

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       firstName,
//       lastName,
//       mobile,
//       email,
//       password: hashedPassword
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'Signup successful' });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });
