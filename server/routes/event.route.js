const express = require('express');
const multer = require("multer");

const authMiddleware = require("../middlewares/authMiddleware");
const eventController = require("../controllers/event.controller");

const router = express.Router();

// Multer Disk Stroge Function
const storage = multer.diskStorage({

    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
  
  const upload = multer({ storage });

// Social Routes
router.get("/home", authMiddleware, eventController.fetchEvent)

router.post("/add", authMiddleware, upload.single("picture"), eventController.postEvent)

router.get('/comments/:postId', authMiddleware, eventController.getCommentUserDetails);

router.post('/post/comment', authMiddleware, eventController.addCommentToEvent);

router.get('/likes/:postId', authMiddleware, eventController.getLikesUserDetails);

router.post('/post/like', authMiddleware, eventController.addLikeToEvent);


module.exports = router;