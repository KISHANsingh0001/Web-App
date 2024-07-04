const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const {addUser, authenticateUser, getUserData} = require("../../models/v1/auth");


router.post("/api/v1/signup",async (req, res)=>{
    try{
        const { name, email, phone, age, isParent, password } = req.body;

        await addUser(name, email, phone, age, isParent, password);

        return res.json({success:true ,message:"User added successfully"});

    }catch(err){
        console.log(err)
        return res.json({success:false ,message:"Something went wrong"});
    }
});

// router.post("/api/v1/login",async (req, res)=>{
//     try{
//         const { email, password } = req.body;
        
//         const authed = await authenticateUser(email, password);

//         if(authed){
//             const userData = await getUserData(email);
//             return res.json({success:true ,message:"User authenticated successfully"});
//         }
//         else{
//             return res.json({success:false ,message:"Invalid credentials"});
//         }
//     }catch(err){
//         console.log(err)
//         return res.json({success:false ,message:"Something went wrong"});
//     }
// });





module.exports = router;