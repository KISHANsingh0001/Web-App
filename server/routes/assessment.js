import express from 'express'
const router = express.Router()
import Adult from "../data/adultQuestionnaire.js"
import Child from "../data/childQuestionnaire.js"
import {findScore, storeAssessmentResult, findPrediction} from "../models/assessment.js"
import verifyToken from "../middlewares/verifyToken.js"


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


router.post("/assessment", verifyToken, async (req, res) => {
    const test = req.query.test;
    const responses = req.body.responses;
    console.log(responses);
  
    const email = req.user.email;
  
    const score = findScore(responses, test);
    console.log(score);
  
    const prediction = findPrediction(score, test);
  
    await storeAssessmentResult(email, test, "v1", responses, score, prediction);
    return res.json({ score: score, prediction: prediction });
  });
  

export default router;