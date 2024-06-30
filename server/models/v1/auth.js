require("dotenv");
const mongoose = require("mongoose");
const db_url = process.env.MONGO_URL;
const { response } = require("express");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    age:Number,
    isParent:Boolean,
    isEnrolled:Boolean,
    serviceID:String,
    teststaken:Number,
    assesmentResponses:Array,
});

const userModel = mongoose.model(('users', userSchema));

mongoose.connect(db_url).then(() => {
    console.log("Connected to the database");
    }).catch((err)=>{
    console.log('Error connecting to MongoDB', err);
    } );

const addUser = async (name, email, phone, age, isParent, password) => {

    try{
        const existingUser = await userModel.findOne({email: email});

        if (existingUser){
            console.log("User already exists");
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        const user = new userModel({name, email, password: hashedPassword, phone, age, isParent, isEnrolled: false, serviceID: "", teststaken: 0, assesmentResponses: []});
        await user.save();
        console.log("User added successfully");

    }catch(err){
        console.log("Error saving user response", err);
    }
}

const authenticateUser = async (email, password) => {
    try{
        const user = await userModel.findOne({ email: email });
        if (!user) {
            console.log("User not found");
            return null;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            console.log("Authentication successful");
            return true;

        } else {
            console.log("Invalid credentials");
            return null; 
        }
    }catch(err){
        console.log("Error authenticating user", err);
    }
}

const getUserData = async (email) => {
    try{
        const user = await userModel.findOne({email: email});

        return {email:user.email,
                name:user.name,
                isParent:user.isParent,
                isEnrolled:user.isEnrolled,
                serviceID:user.serviceID,
                };
                
    }catch(err){
        console.log("Error getting user data", err);
    }
}

module.exports = {addUser, authenticateUser, getUserData};
