const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/verifyToken');
const {addConsultation, mailUser} = require('../../models/v1/consultation');

router.post("/api/v1/consultation", async (req, res) => {
    const email = req.body.email;
    const {date, timeSlot} = req.body;
    await addConsultation(email, date, timeSlot);
    mailUser(email, date, timeSlot);
    res.json({success:true, message:"Consultation added successfully"});
});


module.exports = router