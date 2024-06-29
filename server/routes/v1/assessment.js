const express = require("express")
const router = express.Router()
const questionnaire = require("../../data/v1/questionnaire")
const {findScore,storeDetails} = require("../../models/v1/assessment")

router.get("/api/v1/assessment",(req,res)=>{
    return res.json(questionnaire)
})


router.post("/api/v1/assessment",async (req,res)=>{
    const responses = req.body.responses;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const score = findScore(responses);
    console.log(score);

    if(score > 6){
        await storeDetails(name, email, phone,"v1",responses, score, 1);
        return res.json({predection:1})
    }
    else{
        await storeDetails(name, email, phone, "v1", responses, score, 0);
        return res.json({predection:0})
    }
}
)

module.exports = router;