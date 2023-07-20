const fs = require("fs")
const User = require("../models/user.model");
const Place = require("../models/Place")

const addNewFlat = async (req, res) => {
    // addedPhotos,
    try {
        const {
            title, address, location,
            description, perks, extraInfo,
            price, lokingFor
        } = req.body;

        const userID = req.userId;

        const uploadedfiles = []

        for (let i = 0; i < req.files.length; i++) {
            let img = fs.readFileSync(req.files[i].path);
            uploadedfiles.push(img);
        }

        const placeDoc = await Place.create({
            owner: userID,
            photos: uploadedfiles,
            title, address, description,
            perks, extraInfo, lokingFor, location, price

        });
        res.status(200).json(placeDoc);

    } catch (err) {
        console.log(err)
    }
}





const flatMatesFatch = async (req, res) => {

    try {
        const flats = await Place.find().populate({
            path: 'owner',
            select: 'firstName lastName picture'
        }).exec()

        res.status(200).send(flats);


    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while fetch flats.' });
    }
}






module.exports = {

    addNewFlat,
    flatMatesFatch,

}



