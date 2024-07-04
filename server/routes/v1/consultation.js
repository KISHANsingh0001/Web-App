const express = require('express');
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');
const {addConsultation, mailUser} = require('../../models/v1/consultation');

router.post("/api/v1/consultation", verifyToken, async (req, res) => {
    const email = req.user.email;
    const {date, timeSlot} = req.body;
    await addConsultation.addConsultation(email, date, timeSlot);
    mailUser(email, date, timeSlot);
    res.json({success:true, message:"Consultation added successfully"});
});


module.exports = router