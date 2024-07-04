const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/verifyToken');

const addFromalDiagnosis = require('../../models/v1/formalDiagnosis');

router.get("/api/v1/formalDiagnosis", (req, res) => {
    res.json(
        {diagnosis:["autism" , "adhd", "dislexia", "disgraphiadia", "diacalculia", "dyspraxia", "peach delay"]}
    )
});


router.post("/api/v1/formalDiagnosis", verifyToken, async (req, res) => {
    const email = req.user.email;
    const {date, diagnosis, typeOfDiagnosis} = req.body;
    await addFromalDiagnosis.addFormalDiagnosis(email, date, diagnosis, typeOfDiagnosis);
    mailUser(email, date, diagnosis, typeOfDiagnosis);
    res.json({success:true, message:"Diagnosis added successfully"});
});


module.exports = router;