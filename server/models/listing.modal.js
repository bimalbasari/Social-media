const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  user: Object,
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

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
