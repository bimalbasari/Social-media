const express = require('express');
const multer = require("multer");

const userController = require("../controllers/userControllers");



const router = express.Router();

// Multer Disk Stroge Function
const storage = multer.diskStorage({

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});


const upload = multer({ storage });


// User login signup routes
router.post('/signup', upload.single("picture"), userController.createUser);

router.post('/login', userController.userLogin);



module.exports = router;


