const express = require('express');
const multer = require("multer");
const flatController = require("../controllers/flatController");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Multer Disk Stroge Function
const storage = multer.diskStorage({

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
let multerStorage = multer.memoryStorage()
let multerUploads = multer({storage: multerStorage, limits: { fileSize: 1024 * 1024 * 10 }})
router.post("/uploadMusic", multerUploads.array("musics"),
function (req, res, next) {
    const musicFiles = req.files;
    console.log(musicFiles);
});

const upload = multer({ storage });
// Flat routes



router.post('/add', authMiddleware, upload.array('picture'), flatController.addNewFlat);

router.get("/get", flatController.flatMatesFatch);

// router.get("/user/message", authMiddleware, flatController.flatMateChats);

// router.get("/message/:id", authMiddleware, flatController.flatMateSingalChat);

// router.get("/messages/", authMiddleware, flatController.findUser);

module.exports = router;