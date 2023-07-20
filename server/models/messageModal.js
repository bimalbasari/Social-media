
const mongoose = require('mongoose');
const Chat = require('./chatModel');
const User = require('./user.model');

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: User
    },
    content: { type: String, trim: true },
    chat: {
        type: mongoose.Schema.objectId,
        ref: Chat
    }
}, { timestamps: true })

const Message = mongoose.model("message", messageSchema);
module.exports = Message