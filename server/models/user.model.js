const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  mobile: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
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

const User = mongoose.model('User', userSchema);

module.exports = User;

