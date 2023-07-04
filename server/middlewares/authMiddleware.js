const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const dotenv = require("dotenv")

dotenv.config();

const authMiddleware = async (req, res, next) => {
  try {
    // Get the token from the request headers
    const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is sent in the format "Bearer <token>"

    if (!token) {
      // Token not provided
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SERECTKEY); // Replace 'your_secret_key' with your actual secret key

    // Find the user based on the token's payload
    const user = await User.findById(decoded.userId); // Assuming you have a User model

    if (!user) {
      // User not found
      return res.status(404).json({ error: 'User not found' });
    }
    // Pass the user to the next middleware or route handler
    // req.body = { ...user: user._id };
    req.userId=user._id;
    // console.log(req.body, "middlew")
    next();
  } catch (error) {
    // Invalid token
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
