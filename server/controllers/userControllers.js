const fs = require("fs");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user.model");


const createUser = async (req, res) => {
    try {
        let img = fs.readFileSync(req.file.path);
        let encode_image = img.toString("base64");
        const { 
            firstName,
            lastName,
            email,
            mobile,
            password 
            } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists'
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user

        const newUser = new User({
            firstName,
            lastName,
            mobile,
            email,
            password: hashedPassword,
            picture: {
                contentType: req.file.mimetype,
                size: req.file.size,
                image: encode_image,
            }
        });

        await newUser.save();

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


const index = async (req, res, next) => {
    try {

        let users = await User.find()
        return res.status(200).json({
            users
        })

    } catch (error) {
        return res.json({
            message: 'An error Occured'
        })
    }
}

const show = async (req, res, next) => {
    try {
        let userID = req.body.userID;
        let user = await User.find(userID);
        return res.json({
            user
        })
    } catch (error) {
        return res.json({
            message: 'An error Occured'
        })
    }

}





module.exports = {
    createUser,
}