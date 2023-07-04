const User = require("../models/user.model");
const Flatmate = require("../models/flatMates.modal");

const addNewFlat = (req, res) => {
    try {
        let img = fs.readFileSync(req.file.path);
        let encode_image = img.toString("base64");
        const { location, price, category, description } = req.body;

        const userID = req.userId
        // console.log(user, "user_id")

        // Create a new listing using the Listing model
        const newListing = new Listing({
            userID,
            location,
            price,
            category,
            description,
            picture: {
                contentType: req.file.mimetype,
                size: req.file.size,
                image: encode_image,
            }
        });

        newListing.save()
        res.status(201).json(newListing);

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



