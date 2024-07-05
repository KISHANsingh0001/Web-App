const express = require("express")
const router = express.Router()
const Adult = require("../../data/v1/adultQuestionnaire") 
const Child = require("../../data/v1/childQuestionnaire")
const {findScore,storeAssessmentResult,findPrediction} = require("../../models/v1/assessment")
const verifyToken = require("../../middlewares/verifyToken")


router.get("/assessment",(req,res)=>{
    test = req.query.test;
    if(test === "Adult_AQ"){
        return res.json(Adult.AQ)
    }
    else if (test === "Adult_ASRS_5"){
        return res.json(Adult.ASRS_5)
    }
    else if (test === "Adult_AQ_10"){
        return res.json(Adult.AQ_10)
    }
    else if (test === "Adult_CAT_Q"){
        return res.json(Adult.CAT_Q)
    }
    else if (test === "Adult_RBQ_2A"){
        return res.json(Adult.RBQ_2A)
    }
    else if (test === "Child_AQ_10_1"){
        return res.json(Child.AQ_10_1)
    }
    else if (test === "Child_AQ_10_2"){
        return res.json(Child.AQ_10_2)
    }
    else{
        return res.json({error:"Invalid test"})
    
    }
})


router.post("/assessment",verifyToken, async (req,res)=>{
    const test = req.query.test;
    const responses = req.body.responses;
    console.log(responses)

    const email = req.user.email;
    
    const score = findScore(responses, test);
    console.log(score);

    const predection = findPrediction(score, test);

    await storeAssessmentResult(email, test, "v1", responses, score, predection);
    return res.json({score:score, predection:predection});
}
)

module.exports = router;