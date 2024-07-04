const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/verifyToken');
const {updateTherapySession,findTherapySession, enumerateTherapySessions , addTherapySession} = require('../../models/v1/therapy');

router.get('/api/v1/therapy', (req, res) => {
    res.json(
        {therapies:["peach Therapy", "Occupational Therapy", "Behavioural Therapy", "Sensory integraion Therapy"]}
    )
}
);


router.post('/api/v1/addTherapy',verifyToken, async(req, res) => {
    const email = req.user.email;
    const {date, timeSlot, typeOfTherapy} = req.body;
    await addTherapySession.addTherapySession(email, date, timeSlot, typeOfTherapy);
    mailUser(email, date, timeSlot, typeOfTherapy);
    res.json({success:true, message:"Therapy session added successfully"});
});

router.post('/api/v1/therapy/update', verifyToken, async(req, res) => {
    const email = req.user.email;
    const {date, timeSlot, typeOfTherapy, isDone} = req.body;
    await updateTherapySession.updateTherapySession(email, date, timeSlot, typeOfTherapy, isDone);
    res.json({success:true, message:"Therapy session updated successfully"});
});

router.post('/api/v1/therapy/find', verifyToken, async(req, res) => {
    const email = req.user.email;
    const therapySession = await findTherapySession.findTherapySession(email);
    res.json(therapySession);
});

router.post('/api/v1/therapy/enumerateTherapy', verifyToken, async(req, res) => {
    const therapySessions = await enumerateTherapySessions();
    res.json(therapySessions);
});

module.exports = router;