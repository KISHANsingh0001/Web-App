import express from 'express'
import jwt from 'jsonwebtoken'
import checkAdmin from "../middlewares/Admin.js"
import adminModel from "../models/adminAuth.js"
import therapistModel from '../models/therapist.js'
import { userModel } from '../models/auth.js'
import bcrypt from 'bcrypt'

const router = express.Router();

router.post("/addAdmin", async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const existingAdmin = await adminModel.findOne({ email: email });

        if (existingAdmin){
            console.log("Admin already exists");
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        const admin = new adminModel({name, email, password: hashedPassword, hasSuperAccess: false});

        await admin.save();
        
        return res.json({success:true ,message:"Admin added successfully"});
    } catch(err){
        console.log(err)
        return res.json({success:false ,message:"Something went wrong"});
    }
});

router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        const authed = await checkAdmin(email, password);

        if(authed){
            const token = jwt.sign({email:email}, process.env.JWT_SECRET_KEY);
            return res.json({success:true ,message:"Admin authenticated successfully", token:token});
        }
        else{
            return res.json({success:false ,message:"Invalid credentials"});
        }
    }catch(err){
        console.log(err)
        return res.json({success:false ,message:"Something went wrong"});
    }
});



router.get("/findThese", async (req, res) => {
    try {
        
        const users = await userModel.find({});
        
        const therapists = await therapistModel.find({});
        //const therapyCenter = await therapyCenterModel.find({});

        return res.json( { success: true, therapistsData: therapists, userData:users })
    } catch (err) {
        console.log(err);
        return res.json({ success: false, message: "Something went wrong" });
    }
});


export default router;