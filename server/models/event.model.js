const mongoose = require('mongoose');
const User = require("./user.model");

const eventSchema = new mongoose.Schema({
    postBy: {
        type: mongoose.Schema.ObjectId,
        ref: User,
        required: true
    },
    content: {
        type: String
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
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
            }
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
            },
            comment: {
                type: String, 
            }
        }
    ]
}, { timestamps: true })

const Event = mongoose.model('event', eventSchema);

module.exports = Event