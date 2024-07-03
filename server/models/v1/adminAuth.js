require("dotenv");
const mongoose = require("mongoose");
const db_url = process.env.MONGO_URL;
const bcrypt = require("bcrypt");
import { therapistModel, therapyCenterModel } from "./therapyCenter";
import { userModel } from "./auth";

const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    hasSuperAccess:Boolean,
});

const adminModel = mongoose.model('admins', adminSchema);

mongoose.connect(db_url).then(() => {
    console.log("Connected to the database");
}).catch((err)=>{
    console.log('Error connecting to MongoDB', err);
});



const checkAdmin = async (email, password) => {
    try{
        const admin = await adminModel.findOne({ email: email });

        if (!admin) {
            console.log("Admin not found");
            return null;
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (isMatch) {
            return admin;
        } else {
            console.log("Incorrect password");
            return null;
        }
    } catch(err){
        console.log("Error authenticating admin", err);
    }
}


const addAdmin = async (name, email, password) => {
    try{
        const existingAdmin = await adminModel.findOne({ email: email });

        if (existingAdmin){
            console.log("Admin already exists");
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        const admin = new adminModel({name, email, password: hashedPassword, hasSuperAccess: false});

        await admin.save();
        console.log("Admin added successfully");
    } catch(err){
        console.log("Error saving admin response", err);
    }

}

const enumerateTherapyCenters = async () => {
    try{
        const centers = await therapyCenterModel.find({});
        return centers;
    }catch(err){
        console.log("Error getting therapy centers", err);
    }
}

const enumerateUsers = async () => {
    try{
        const users = await userModel.find({});
        return users;

    }catch(err){
        console.log("Error getting users", err);
    }
}

const enumerateTherapists = async () => {
    try{
        const therapists = await therapistModel.find({});
        return therapists;
    }
    catch(err){
        console.log("Error getting therapists", err);
    }
}

module.exports = {checkAdmin, addAdmin, enumerateTherapyCenters, enumerateUsers, enumerateTherapists};
