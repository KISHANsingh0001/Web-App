import express from 'express'
import {authenticateTherapist, addTherapist} from '../middlewares/therapist.js'
const router = express.Router();

router.post("/api/loginTherapist", async (req, res) => {
    const { email, password } = req.body;
    authenticateTherapist(email, password);
});

router.post("/api/addTherapist", async (req, res) => {
    const { name, email, password, center } = req.body;
    addTherapist(name, email, password, center);
});


