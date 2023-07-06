const fs= require("fs");
const User = require("../models/user.model");
const Event = require("../models/event.model")

const createEvent = async (req, res) => {
   
    try {
        let img = fs.readFileSync(req.file.path);
        let encode_image = img.toString("base64");
        const { content} = req.body;
        const userID = req.userId;

        const newEvent= new Event({
            postBy:userID,
            content,
            picture: {
                contentType: req.file.mimetype,
                size: req.file.size,
                image: encode_image,
            }
        })
       await newEvent.save();
       res.status(200).json({message:"saved"})
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while creating the event.' })
    }
}

module.exports = {
    createEvent
}