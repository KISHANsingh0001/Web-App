import mongoose from "mongoose";

const therapySessionSchema = new mongoose.Schema({
    email: { type: String, required: true},
    date: { type: Date, required: true},
    timeSlot: {type: String,required: true},
    mode: { type: String, default: "Online"},
    typeOfTherapy: { type: [String], default: []},
    isDone: { type: Boolean, default: false},
});


const Therapy = mongoose.model('Therapy', therapySessionSchema);


const addTherapySession = async(email,date,timeSlot,mode ,typeOfTherapy)=>{
    const therapy = new Therapy({email, date, timeSlot,mode, typeOfTherapy, isDone: false});
    await therapy.save();
    console.log("Therapy session added successfully");
}


module.exports = { addTherapySession };
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

const updateTherapySession = async(email, date, timeSlot,mode, typeOfTherapy, isDone) => {
    try{
        await Therapy.updateOne({ email: email}, { date, timeSlot,mode, typeOfTherapy, isDone});
        console.log("Therapy session updated successfully");

    }catch(err){
        console.log("Error updating therapy session", err);
    }
}

export default {updateTherapySession,findTherapySession, enumerateTherapySessions , addTherapySession};