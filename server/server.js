import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import auth from './routes/auth.js';
import assessment from './routes/assessment.js';
import admin from './routes/adminauth.js';
import consultation from './routes/consultation.js';
import formalDiagnosis from './routes/formalDiagnosis.js';
import userProfile from './routes/userProfile.js';
import './dbconnect.js';
import dotenv from 'dotenv';
import passport from 'passport'

import Diagnosis from './routes/diagnosis.js';
import contact from './routes/Contact.js'; // Import the contact route

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './dist')));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session()); // If you need to persist the user session

// Routes
app.use('/api/', consultation);
app.use('/api/', Diagnosis);
app.use('/', formalDiagnosis);
app.use('/api', auth);
app.use('/api', assessment);
app.use('/api/admin', admin);
app.use('/api', consultation);
app.use('/api', userProfile);
app.use('/api', contact); // Register the contact route

// Google Authentication Routes
app.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile'], // Request the user's email and profile information
}));

// Google callback route after successful authentication
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }), // Redirect to /login on failure
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);

// Serve the index.html for any unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
