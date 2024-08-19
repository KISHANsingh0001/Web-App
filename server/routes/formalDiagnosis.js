import express from 'express'
const router = express.Router();
//import verifyToken from "../middlewares/verifyToken"
import {addFormalDiagnosis,FormalDiagnosis} from '../models/formalDiagnosis.js'


router.get("/api/v1/formalDiagnosis", (req, res) => {
    res.json(
        {diagnosis:["autism" , "adhd", "dislexia", "disgraphiadia", "diacalculia", "dyspraxia", "peach delay"]}
    )
});


router.post("/api/v1/formalDiagnosis", async (req, res) => {
    const email = req.body.email;
    const {date, timeSlot, typeOfDiagnosis} = req.body;
    await addFormalDiagnosis(email, date, timeSlot, typeOfDiagnosis );
    res.json({success:true, message:"Diagnosis added successfully"});
});
router.get("/api/v1/formalDiagnosis/:email", async (req, res) => {
    const email = req.params.email;

    try {
        // Find the formal diagnoses associated with the given email
        const diagnoses = await FormalDiagnosis.find({ email });

        // Check if diagnoses were found
        if (diagnoses.length === 0) {
            return res.status(404).json({ success: false, message: "No diagnoses found for this email" });
        }

        // Extract the date and timeSlot from the diagnoses
        const result = diagnoses.map(diagnosis => ({
            date: diagnosis.date,
            timeSlot: diagnosis.timeSlot
        }));

        res.json({ success: true, data: result });
    } catch (error) {
        console.error("Error fetching formal diagnoses:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


export default router;