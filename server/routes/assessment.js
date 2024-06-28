const express = require("express")
const router = express.Router()
const questions = require("../data/questions")
const {findScore,storeDetails} = require("../models/assessment")

router.get("/api/assessment",(req,res)=>{
    return res.json(questions)
})


router.post("/api/assessment",async (req,res)=>{
    const responses = req.body.responses;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const score = findScore(responses);
    console.log(score)
    await storeDetails(name,email,phone,score);
    if(score > 6){
        return res.json({predection:1})
    }
    else{
        return res.json({predection:0})
    }
}
)

module.exports = router;