const mongoose = require('mongoose');

const therapySessionSchema = new mongoose.Schema({
    email: { type: String, required: true},
    date: { type: Date, required: true},
    timeSlot: {type: String,required: true},
    typeOfTherapy: { type: [String], default: []},
    isDone: { type: Boolean, default: false},
});


const Therapy = mongoose.model('Therapy', therapySchema);


const addTherapySession = async(email,date,timeSlot,typeOfTherapy)=>{
    const therapy = new Therapy({email, date, timeSlot, typeOfTherapy, isDone: false});
    await therapy.save();
    console.log("Therapy session added successfully");
}

const enumerateTherapySessions = async() => {
    try{
        const therapySessions = await Therapy.find();
        return therapySessions;
    }
    catch(err){
        console.log("Error fetching therapy sessions", err);
    }
}

const findTherapySession = async(email) => {
    try{
        const therapySession = await Therapy.findOne({ email: email});
        return therapySession;
    }catch(err){
        console.log("Error fetching therapy session", err);
    }
}

const updateTherapySession = async(email, date, timeSlot, typeOfTherapy, isDone) => {
    try{
        await Therapy.updateOne({ email: email}, { date, timeSlot, typeOfTherapy, isDone});
        console.log("Therapy session updated successfully");

    }catch(err){
        console.log("Error updating therapy session", err);
    }
}

module.exports = {updateTherapySession,findTherapySession, enumerateTherapySessions , addTherapySession};