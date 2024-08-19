import express from 'express'
const router = express.Router();

//import verifyToken from "../middlewares/verifyToken"
import {addConsultation} from '../models/consultation.js'
import Consultation from '../models/consultation.js'; 
router.post("/consultation", async (req, res) => {
    const email = req.body.email;
<<<<<<< HEAD
    const {date, timeSlot,mode,result,isDone} = req.body;
    await addConsultation(email, date, timeSlot, mode,result,isDone);
=======
    const {date, timeSlot,mode} = req.body;

    await addConsultation(email, date, timeSlot, mode);
>>>>>>> 5e00446987c3e76d19cdb226fdc40001a43b25d3
    res.json({success:true, message:"Consultation added successfully"});
});
router.get("/consultationdata", async (req, res) => {
    const { email } = req.query;
    
    if (!email) {
        return res.status(400).json({ success: false, message: "Email query parameter is required" });
    }

    try {
        const consultation = await Consultation.findOne({ email: email.trim() });

        if (!consultation) {
            return res.status(404).json({ success: false, message: "Consultation not found" });
        }

        // Destructure all relevant fields
        const { date, timeSlot, result } = consultation;

        // Return response with all details
        res.json({
            success: true,
            email: consultation.email,
            date:date,
            timeSlot,
           // mode,
            result
        });
    } catch (error) {
        console.error('Error fetching consultation data:', error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});


export default router