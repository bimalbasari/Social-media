const express = require('express');
const multer = require("multer")
const authMiddleware = require("../middlewares/authMiddleware");
const userController = require("../controllers/userControllers");
const eventController = require("../controllers/eventController")
const flatMatesController = require("../controllers/flatMatesController")


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
router.post('/login', userController.userLogin);

// Listings

router.post('/newflatmate', authMiddleware, upload.array('pictures', 4), flatMatesController.addNewFlat);

router.get("/flatmate", flatMatesController.flatMatesFatch);

router.post("/createevent", authMiddleware, upload.single("picture"), eventController.createEvent)

module.exports = router;


// ,authMiddleware,upload.single("picture"),eventController.createEvent