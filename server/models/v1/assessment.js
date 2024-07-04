require("dotenv");



const storeAssesmentResult = async (email, AssesmentVersion, responses, score, predection) => {

const {userModel} = require("./auth");

const AdultScores = require("../../data/v1/adultScores");
const ChildScores = require("../../data/v1/childScores");


const findScore = (responses,test) =>{
    if (test === "Adult_AQ") {
        return find_Adult_AQ_Score(responses);
    }
    else if (test === "Adult_ASRS_5") {
       return  find_Adult_ASRS_5_Score(responses);
    }
    else if (test === "Adult_AQ_10") {
       return find_Adult_AQ_10_Score(responses);
    }
    else if (test === "Adult_CAT_Q") {
        return find_Adult_CAT_Q_Score(responses);
    }
    else if (test === "Adult_RBQ_2A") {
       return find_Adult_RBQ_2A_Score(responses);
    }
    else if (test === "Child_AQ_10_1") {
        return find_Child_AQ_10_1_Score(responses);
    }
    else if (test === "Child_AQ_10_2") {
        return find_Child_AQ_10_2_Score(responses);
    }
    else {
        console.log("Invalid test");
    }
}




const storeAssessmentResult = async (email, assessmentNumber, assesmentVersion, responses, score, predection) => {
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





const find_Adult_AQ_Score = (responses) => {
    let totalScore = 0;
    for (let i = 0; i < responses.length; i++) {
        const response = responses[i];
        const optionScores = AdultScores.AQ_scores[i]; 
        const score = optionScores[response];
        totalScore += score;
        console.log(totalScore)
    }
    return totalScore;
}



const find_Adult_AQ_Prediction = (score) => {
    if (score < 26) {
        return "Low chances of Autism"
    }
    else if (score >= 26 && score <= 32) {
        return "Medium chances of Autism"
    }
    else {
        return "High chances of Autism"
    }
}


const find_Adult_ASRS_5_Score = (responses) => {
    let totalScore = 0;
    for (let i = 0; i < responses.length; i++) {
        const response = responses[i];
        const optionScores = AdultScores.ASRS_5_Scores;
        const score = optionScores[response];
        totalScore += score;
        console.log(totalScore)
    }
    return totalScore;
}


const find_Adult_AQ_10_Score = (responses) => {
    let totalScore = 0;
    for (let i = 0; i < responses.length; i++) {
        const response = responses[i];
        const optionScores = AdultScores.AQ_10_Scores[i];
        const score = optionScores[response];
        totalScore += score;
        console.log(totalScore)
    }
    return totalScore;
}

const find_Adult_CAT_Q_Score = (responses) => {
    let totalScore = 0;
    for (let i = 0; i < responses.length; i++) {
        const response = responses[i];
        const optionScores = AdultScores.CAT_Q_Scores;
        const score = optionScores[response];
        totalScore += score;
        console.log(totalScore)
    }
    return totalScore;
}

const find_Adult_RBQ_2A_Score = (responses) => {
    let totalScore = 0;
    for (let i = 0; i < responses.length; i++) {
        const response = responses[i];
        const optionScores = AdultScores.RBQ_2A_Scores;
        const score = optionScores[response];
        totalScore += score;
        console.log(totalScore)
    }
    return totalScore;
}

const find_Child_AQ_10_1_Score = (responses) => {
    let totalScore = 0;
    for (let i = 0; i < responses.length; i++) {
        const response = responses[i];
        const optionScores = ChildScores.AQ_10_1_Scores;
        const score = optionScores[response];
        totalScore += score;
        console.log(totalScore)
    }
    return totalScore;
}

const find_Child_AQ_10_2_Score = (responses) => {
    let totalScore = 0;
    for (let i = 0; i < responses.length; i++) {
        const response = responses[i];
        const optionScores = ChildScores.AQ_10_2_Scores;
        const score = optionScores[response];
        totalScore += score;
        console.log(totalScore)
    }
    return totalScore;
}



const find_Adult_ASRS_5_Prediction = (score) =>{
    if (score < 14) {
        return "Low chances of ADHD"
    }
    else {
        return "High chances of ADHD"
    }
}

const find_Adult_AQ_10_Prediction = (score) => {
    if (score < 6){
        return "Low chances of Autism"
    
    }
    else{
        return "High chances of Asperger's Syndrome"
    }
}

const find_Adult_CAT_Q_Prediction = (score) => {
    if (score <100){
        return "Low chances of Comoflging"
    }
    else{
        return "High chances of Comoflging"
    }
}

const find_Adult_RBQ_2A_Prediction = (score) => {
    if (score <= 25){
        return "very Low chances of Autism"
    }
    else if (score > 25 && score <= 35){
        return "Medium chances of Autism"
    }
    else{
        return "High chances of Autism"
    
    }

}
const find_Child_AQ_10_1_Prediction = (score) => {
    if (score < 6){
        return "Low chances of Autism"
    }
    else{
        return "High chances of Autism"
    }
}

const find_Child_AQ_10_2_Prediction = (score) => {
    if (score < 6){
        return "Low chances of Autism"
    }
    else{
        return "High chances of Autism"
    }
}



const findPrediction = (score, test) => {
    if (test === "Adult_AQ") {
        return find_Adult_AQ_Prediction(score);
    }
    else if (test === "Adult_ASRS_5") {
        return find_Adult_ASRS_5_Prediction(score);
    }
    else if (test === "Adult_AQ_10") {
        return find_Adult_AQ_10_Prediction(score);
    }
    else if (test === "Adult_CAT_Q") {
        return find_Adult_CAT_Q_Prediction(score);
    }
    else if (test === "Adult_RBQ_2A") {
        return find_Adult_RBQ_2A_Prediction(score);
    }
    else if (test === "Child_AQ") {
        return find_Child_AQ_10_1_Prediction(score);
    }
    else if (test === "Child_AQ_10") {
        return find_Child_AQ_10_2_Prediction(score);
    }
    else {
        console.log("Invalid test");
    }
}



module.exports = {findScore, findPrediction, storeAssessmentResult};