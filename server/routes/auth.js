import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { addUser, authenticateUser, getUserData } from '../models/auth.js';

const router = express.Router();

// Signup route for creating a new user with email/password
router.post("/signup", async (req, res) => {
    try {
        const { name, email, phone, age, isParent, password } = req.body;

        await addUser(name, email, phone, age, isParent, password);

        return res.json({ success: true, message: "User added successfully" });
    } catch (err) {
        console.log("Signup Error:", err);
        return res.status(500).json({ success: false, message: "Something went wrong" });
    }
});

// Login route for user authentication with email/password
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login attempt with email:", email);

        const authed = await authenticateUser(email, password);
        console.log(authed);

        if (authed) {
            const userData = await getUserData(email);
            const token = jwt.sign({
                email: email,
                name: userData.name,
                isParent: userData.isParent,
                isEnrolled: userData.isEnrolled,
                serviceID: userData.serviceID,
            }, process.env.JWT_SECRET_KEY);

            console.log("User authenticated successfully");
            return res.json({ success: true, message: "User authenticated successfully", token: token });
        } else {
            console.log("Invalid credentials for email:", email);
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    } catch (err) {
        console.log("Login Error:", err);
        return res.status(500).json({ success: false, message: "Something went wrong" });
    }
});

// Google login route (redirects to Google OAuth)
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback route (handles the response from Google)
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // After successful login, generate JWT token
        const userData = req.user; // user data from the Google OAuth profile
        const token = jwt.sign({
            email: userData.email,
            name: userData.name,
            isParent: userData.isParent, // You can set this or fetch from the DB
            isEnrolled: userData.isEnrolled, // You can set this or fetch from the DB
            serviceID: userData.serviceID, // You can set this or fetch from the DB
        }, process.env.JWT_SECRET_KEY);

        // Redirect to dashboard or desired page with JWT token
        res.redirect(`/dashboard?token=${token}`);
    }
);

export default router;
