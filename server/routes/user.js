const express = require('express');
const multer = require("multer");
const authMiddleware = require("../middlewares/authMiddleware");
const userController = require("../controllers/userControllers");
const eventController = require("../controllers/eventController");
const flatMatesController = require("../controllers/flatController");
const ChatController = require("../controllers/ChatController");


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


// Social Routes
router.get("/social", authMiddleware, eventController.fetchEvent)
router.post("/post", authMiddleware, upload.single("picture"), eventController.createEvent)

router.get('/post/comment/:postId', authMiddleware, eventController.getCommentUserDetails);
router.post('/post/comment', authMiddleware, eventController.addCommentToEvent);

router.get('/post/like/:postId', authMiddleware, eventController.getLikesUserDetails);
router.post('/post/like', authMiddleware, eventController.addLikeToEvent);


// Flat routes


router.post('/places', authMiddleware, upload.array('photos', 4),flatMatesController.addNewFlat);


router.get("/flatmate", flatMatesController.flatMatesFatch);
router.get("/flatmate/chats",authMiddleware, ChatController.flatMateChats);
router.get("/flatmate/chat/:id",authMiddleware, ChatController.flatMateSingalChat);

module.exports = router;
