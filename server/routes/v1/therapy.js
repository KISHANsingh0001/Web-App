const express = require('express');
const router = express.Router();
import verifyToken from '../../middleware/verifyToken';
const addTherapySession = require('../../models/v1/therapy');

router.get('/api/v1/therapy', (req, res) => {
    res.json(
        {therapies:["peach Therapy", "Occupational Therapy", "Behavioural Therapy", "Sensory integraion Therapy"]}
    )
}
);


router.post('/api/v1/therapy',verifyToken, async(req, res) => {
    const email = req.user.email;
    const {date, timeSlot, typeOfTherapy} = req.body;
    await addTherapySession.addTherapySession(email, date, timeSlot, typeOfTherapy);
    mailUser(email, date, timeSlot, typeOfTherapy);
    res.json({success:true, message:"Therapy session added successfully"});
});

module.exports = router;