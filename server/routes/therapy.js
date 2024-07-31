import express from 'express'
const router = express.Router();
import verifyToken from "../middlewares/verifyToken"
import { updateTherapySession, findTherapySession, enumerateTherapySessions, addTherapySession } from '../models/therapy.js'


router.get('/api/therapy', (req, res) => {
    res.json(
        { therapies: ["peach Therapy", "Occupational Therapy", "Behavioural Therapy", "Sensory integraion Therapy"] }
    )
}
);

router.post('/api/therapy', async (req, res) => {
    const email = req.body.email;
    const { date, timeSlot, mode, typeOfTherapy } = req.body;
    await addTherapySession(email, date, timeSlot, mode, typeOfTherapy, isDone = false);
    res.json({ success: true, message: "Therapy session added successfully" });
});

router.post('/api/therapy/update', async (req, res) => {
    const email = req.user.email;
    const { date, timeSlot, typeOfTherapy, isDone } = req.body;
    await updateTherapySession(email, date, timeSlot, typeOfTherapy, isDone);
    res.json({ success: true, message: "Therapy session updated successfully" });
});

router.post('/api/therapy/find', async (req, res) => {
    const email = req.user.email;
    const therapySession = await findTherapySession(email);
    res.json(therapySession);
});

router.post('/api/therapy/enumerateTherapy', async (req, res) => {
    const therapySessions = await enumerateTherapySessions();
    res.json(therapySessions);
});

export default router;