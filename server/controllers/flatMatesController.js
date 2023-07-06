const fs = require("fs")
const User = require("../models/user.model");
const Flatmate = require("../models/flatMates.modal");

const addNewFlat = async (req, res) => {
    try {

        const { location, price, description, lokingFor } = req.body;

        const userID = req.userId
        const pictures = req.files.map((file) => {
            let img = fs.readFileSync(file.path);
            let encode_image = img.toString("base64");
            return {
                contentType: file.mimetype,
                size: file.size,
                image: encode_image,
            }
        });
      
        // Create a new listing using the Listing model
        const newFlat = new Flatmate({
            userID,
            location,
            price,
            description,
            lokingFor,
            picture: pictures
        });

        await newFlat.save()
        res.status(201).json(newFlat);

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: 'An error occurred while creating the listing.' });
    };
}




const flatMatesFatch = async (req, res) => {

    try {
        await User.aggregate(
            [{
                $lookup: {
                    from: "Flatmates",
                    localField: "_id",
                    foreignField: "userID",
                    as: "AllFlatmates"
                }
            }, {
                $project: {
                    _id: 1, // Include the _id field 
                    firstName: 1, // Include the name field
                    lastName: 1, // Include the lastname field
                    email: 1, // Include the email field
                    mobile: 1,// Include the mobile field
                    picture: 1 // Include the picture field
                }
            }]).exec().then((doc) => {
                res.status(200).send(doc);
            })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while fetch flatMate.' });
    }
}



module.exports = {

    addNewFlat,
    flatMatesFatch
}



