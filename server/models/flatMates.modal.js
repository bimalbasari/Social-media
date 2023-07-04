const mongoose = require('mongoose');
const User = require("./user.model")
const flatMatesSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: User,
    required: true
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    contentType: {
      type: String,
    },
    size: {
      type: Number,
    },
    image: {
      type: String,
    },
  }
}, { timestamps: true });

const Flatmate = mongoose.model('Flatmate', flatMatesSchema);

module.exports = Flatmate;

// {
//   type: String,
//   required: true,
// },