const express = require("express")
const router = express.Router()
const questionnaire = require("../../data/v1/questionnaire")
const {findScore,storeAssesmentResult} = require("../../models/v1/assessment")
const jwt = require("jsonwebtoken");

router.get("/api/v1/assessment",(req,res)=>{
    return res.json(questionnaire)
})


router.post("/api/v1/assessment",async (req,res)=>{
    const responses = req.body.responses;
    console.log(responses)
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const score = findScore(responses);
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const email = decoded.email;

    console.log(score);

    if(score > 6){
        await storeAssesmentResult(email,"v1",responses, score, 1);
        return res.json({predection:1})
    }
    else{
        await storeAssesmentResult(email,"v1", responses, score, 0);
        return res.json({predection:0})
    }
}
)

module.exports = router;