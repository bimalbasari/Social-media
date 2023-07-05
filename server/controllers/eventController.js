const User = require("../models/user.model");
const Event = require("../models/event.model")

const createEvent = async (req, res) => {
   
    try {
        let img = fs.readFileSync(req.file.path);
        let encode_image = img.toString("base64");
        const { content} = req.body;
        const userID = req.userId;

        const newEvent= new Event({
            content,
            postBy:userID,
            picture: {
                contentType: req.file.mimetype,
                size: req.file.size,
                image: encode_image,
            }
        })
        console.log(content)
       await  newListing.save();
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while creating the event.' })
    }
}

module.exports = {
    createEvent
}