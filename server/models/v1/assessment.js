require("dotenv");
const scores = require("../../data/v1/scores");
const {userModel} = require("./auth");


const findScore = (responses) =>{
    let totalScore = 0;
    for( let i = 0; i < responses.length; i++){
        const response = responses[i];
        const optionScores = scores[i];
        const score = optionScores[response.option];
        totalScore = totalScore +score;
    }
    return totalScore;
}


const storeAssesmentResult = async (email, assessmentNumber, assesmentVersion, responses, score, predection) => {
    try{
        const result =await userModel.findOneAndUpdate(
            {email: email},
            {
                $push :{assesmentResponses: { assessmentNumber, assesmentVersion, responses, score, predection}},
                $inc: {teststaken: 1}
            },
            {new: true}
            
        )
        console.log("Assesment result stored successfully", result);
    }
    catch(e){
            console.log("Error in storing the assesment result",e);
        
    }
}

module.exports = {findScore, storeAssesmentResult};
