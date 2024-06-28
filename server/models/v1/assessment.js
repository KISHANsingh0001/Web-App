require("dotenv");
const mongoose = require("mongoose");
const scores = require("../../data/v1/scores");
const { response } = require("express");
const db_url = process.env.MONGO_URL;   

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    testversion:String,
    responses:Array,
    score:Number,
    prediction:Number
});

const userModel = mongoose.model('users', userSchema);

mongoose.connect(db_url).then(() => {
    console.log("Connected to the database");
    }).catch((err)=>{
    console.log('Error connecting to MongoDB', err);
    } );


const findScore = (responses) =>{
    let totalScore = 0;
    for( let i = 0; i < responses.length; i++){
        const response = responses[i];
        const optionScores = scores[i];
        const score = optionScores[response];
        totalScore = totalScore +score;
    }
    return totalScore;
}

const storeDetails = async (name, email, phone,testversion,responses,score,prediction) =>{
    try{
    const user = new userModel({name,email,phone,testversion,responses,score,prediction});
    await user.save();

    console.log("User response saved successfully");
    }
    catch(err){
        console.log("Error saving user response", err);
    }
};


module.exports = {findScore, storeDetails};
