const fs = require("fs")
const User = require("../models/user.model");
const Flatmate = require("../models/flatMates.modal");

const addNewFlat = async (req, res) => {
    try {
        const userID = req.userId;
        const { location, price, description, lokingFor } = req.body;

        // Create a new listing using the Listing model
        // const newFlat = new Flatmate({
        //     userID,
        //     location,
        //     price,
        //     description,
        //     lokingFor,
        //     pictures: [
        //         {
        //             contentType: req.files[0].mimetype,
        //             size: req.files[0].size,
        //             image: fs.readFileSync(req.files[0].path).toString("base64"),
        //         },
        //         {
        //             contentType: req.files[1].mimetype,
        //             size: req.files[1].size,
        //             image: fs.readFileSync(req.files[1].path).toString("base64"),
        //         },
        //         {
        //             contentType: req.files[2].mimetype,
        //             size: req.files[2].size,
        //             image: fs.readFileSync(req.files[2].path).toString("base64"),
        //         },
        //     ]
        // });
    
        console.log(req.files)
        // console.log(req.files[1].mimetype)
        // console.log(req.files[2].mimetype)
    
        // await newFlat.save()
        // res.status(201).json({message:file});
  
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
    flatMatesFatch,

}



