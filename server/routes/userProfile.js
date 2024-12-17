




import express from "express";
import verifyJWT from "../middlewares/verifyToken.js"; // Adjust the path based on your directory structure
import { getUserData } from "../models/auth.js";

const router = express.Router();

// Secure the route with the verifyJWT middleware
router.get('/userdata', verifyJWT, async (req, res) => {
    try {
        // The email is extracted from the decoded token
        const email = req.user.email;
        // console.log("Extracted email from token:", email);

        // Fetch user data based on the extracted email
        const userData = await getUserData(email);
        // console.log(userData)
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(userData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
