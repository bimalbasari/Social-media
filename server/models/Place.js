const mongoose = require('mongoose');

const User = require("./user.model");

const placeschema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: User,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
  },
  lokingFor: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  photos: [{
    data: Array,
    type: Buffer
  }],
  description: {
    type: String,
    required: true
  },
  perks: [{
    type: String
  }],
  extraInfo: {
    type: String
  },

  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });


const PlaceModel = mongoose.model('Place', placeschema);

module.exports = PlaceModel;