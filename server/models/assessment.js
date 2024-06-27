const scores = require("../data/scores")

const findScore = (responses) =>{
    let totalScore = 0;
    for( let i = 0; i < responses.length(); i++){
        const response = responses[i];
        const optionScores = scores[i];
        const score = optionScores[response];
        totalScore = totalScore +score;
    }
    return totalScore;
}

const storeDetails = async (name, email, phone, score) =>{

};


module.exports = {findScore, storeDetails};