import 'dotenv'
import mongoose from 'mongoose';
import bcrypt from "bcrypt"
// import { therapistModel, therapyCenterModel } from "./therapyCenter.js";
import { userModel } from "./auth.js";

const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    hasSuperAccess:Boolean,
});

const adminModel = mongoose.model('admins', adminSchema);
export default  adminModel


// const enumerateTherapyCenters = async () => {
//     try{
//         const centers = await therapyCenterModel.find({});
//         return centers;
//     }catch(err){
//         console.log("Error getting therapy centers", err);
//     }
// }


