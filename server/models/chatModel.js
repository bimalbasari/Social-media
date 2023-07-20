
const { default: mongoose } = require("mongoose");

const User = require("./user.model");

const ChatSchema =new mongoose.Schema({

    chatName: {
        type: String,
        trim: true
    }
    ,
    isgroupChat: {
        type: Boolean,
        default: false
    },
    users: [{
        type: mongoose.Schema.ObjectId,
        ref: User,
    }],
    latestMasage: {
        type: mongoose.Schema.ObjectId,
        ref: Messages,
    }, groupAdmin: {
        type: mongoose.Schema.ObjectId,
        ref: User,
    }


}, { timestamps: true })

const Chat = mongoose.model("chats", ChatSchema);

module.exports = Chat