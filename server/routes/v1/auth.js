const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const {addUser, authenticateUser, getUserData} = require("../../models/v1/auth");


router.post("api/v1/signup",async (req, res)=>{
    try{
        const responses = req.body.responses;
        const name = responses.name;
        const email = responses.email;
        const phone = responses.phone;
        const age = responses.age;
        const isParent = responses.isParent;
        const password = responses.password;

        await addUser(name, email, phone, age, isParent, password);

        return res.json({success:true ,message:"User added successfully"});

    }catch(err){
        console.log(err)
        return res.json({success:false ,message:"Something went wrong"});
    }
});

router.post("api/v1/login",async (req, res)=>{
    try{
        const responses = req.body.responses;
        const email = responses.email;
        const password = responses.password;

        const authed = await authenticateUser(email, password);

        if(authed){
            const userData = await getUserData(email);
            const token = jwt.sign({email:email,
                                    name:userData.name,
                                    isParent:userData.isParent,
                                    isEnrolled:userData.isEnrolled,
                                    serviceID:userData.serviceID,},
                                'secretkey');
            return res.json({success:true ,message:"User authenticated successfully", token:token});
        }
        else{
            return res.json({success:false ,message:"Invalid credentials"});
        }
    }catch(err){
        console.log(err)
        return res.json({success:false ,message:"Something went wrong"});
    }
});