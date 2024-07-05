const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/verifyToken');
const {addConsultation} = require('../../models/v1/consultation');

router.post("/api/v1/consultation", async (req, res) => {
    const email = req.body.email;
    const {date, timeSlot} = req.body;
    await addConsultation(email, date, timeSlot, mode);
    res.json({success:true, message:"Consultation added successfully"});
});


module.exports = router