const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { checkAdmin, addAdmin, enumerateTherapyCenters, enumerateUsers, enumerateTherapists } = require("../../models/v1/adminAuth");

router.post("/api/v1/admin/login", async (req, res) => {
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

router.post("/api/v1/admin/addAdmin", async (req, res) => {
    try{
        const {name, email, password} = req.body;
        await addAdmin(name, email, password);
        return res.json({success:true ,message:"Admin added successfully"});
    }catch(err){
        console.log(err)
        return res.json({success:false ,message:"Something went wrong"});
    }
});


// modify as per filters
router.post("/api/v1/admin/findThese", async (req, res) => {
    try {
        const { wantCenters, wantUsers, wantTherapists } = req.body;
        const response = { success: true, message: "Got information" };

        if (wantCenters) {
            const centers = await enumerateTherapyCenters();
            response.centers = centers;
        }
        if (wantUsers) {
            const users = await enumerateUsers();
            response.users = users;
        }
        if (wantTherapists) {
            const therapists = await enumerateTherapists();
            response.therapists = therapists;
        }

        return res.json(response);
    } catch (err) {
        console.log(err);
        return res.json({ success: false, message: "Something went wrong" });
    }
});