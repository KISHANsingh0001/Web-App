import express from 'express';
const router = express.Router();
import Consultation, { addConsultation } from '../models/consultation.js';

router.post("/consultation", async (req, res) => {
    const { email, date, timeSlot, mode, result, isDone } = req.body;
    await addConsultation(email, date, timeSlot, mode, result, isDone);

    res.json({ success: true, message: "Consultation added successfully" });
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

        const { date, timeSlot, result } = consultation;

        res.json({
            success: true,
            email: consultation.email,
            date,
            timeSlot,
            result
        });
    } catch (error) {
        console.error('Error fetching consultation data:', error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

export default router;
