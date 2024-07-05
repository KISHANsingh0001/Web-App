const express = require('express');
const jwt = require('jsonwebtoken');
const { addUser, authenticateUser, getUserData } = require('../../models/v1/auth');
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, phone, age, isParent, password } = req.body;

        await addUser(name, email, phone, age, isParent, password);

        return res.json({ success: true, message: "User added successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Something went wrong" });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const authed = await authenticateUser(email, password);

        if (authed) {
            const userData = await getUserData(email);
            const token = jwt.sign({
                email: email,
                name: userData.name,
                isParent: userData.isParent,
                isEnrolled: userData.isEnrolled,
                serviceID: userData.serviceID,
            }, process.env.JWT_SECRET_KEY);

            return res.json({ success: true, message: "User authenticated successfully", token: token });
        } else {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Something went wrong" });
    }
});


module.exports = router;
