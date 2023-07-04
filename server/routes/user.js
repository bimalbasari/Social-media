const express = require('express');
const multer = require("multer")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userController = require("../controllers/userControllers");
const flatMatesController = require("../controllers/flatMatesController")
const User = require('../models/user.model');
const authMiddleware = require("../middlewares/authMiddleware");


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

router.post('/newflatmate', authMiddleware, upload.single("picture"), flatMatesController.addNewFlat);
router.get("/flatmate", flatMatesController.flatMatesFatch)

module.exports = router;


