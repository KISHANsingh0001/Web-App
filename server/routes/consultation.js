import express from 'express'
const router = express.Router();

//import verifyToken from "../middlewares/verifyToken"
import {addConsultation} from '../models/consultation.js'

router.post("/consultation", async (req, res) => {
    const email = req.body.email;
    const {date, timeSlot,mode} = req.body;

    await addConsultation(email, date, timeSlot, mode);
    res.json({success:true, message:"Consultation added successfully"});
});


export default router