const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require("./user.model");

const placeschema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  title: {
    type: String,
    required: true
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
  checkIn: {
    type: String,
    required: true
  },
  checkOut: {
    type: String,
    required: true
  },
  maxGuests: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const PlaceModel = mongoose.model('Place', placeschema);

module.exports = PlaceModel;