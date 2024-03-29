const fs = require("fs");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const User = require("../models/user.model")

dotenv.config();

const createUser = async (req, res) => {
    try {
        let img = fs.readFileSync(req.file.path);
        const {
            firstName,
            lastName,
            email,
            mobile,
            password,
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
            picture: img
        });

        await newUser.save();

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};



const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        } else {
            // Compare the entered password with the hashed password
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Authentication failed' });
            }

            const { firstName, lastName, mobile, email, picture } = user;

            // Generate a JWT token
            const token = jwt.sign({ userId: user._id }, process.env.SECRETKEY);

            // Set the "Bearer" cookie with the generated token
            res.cookie('Bearer', token, {  maxAge: 3600000 });

            // Return the user information in the response
            res.status(200).json({
                user: { firstName, lastName, mobile, email, picture }
            });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        console.log(error)
    }
};




const index = async (req, res) => {
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




module.exports = {
    createUser,
    userLogin,

}

