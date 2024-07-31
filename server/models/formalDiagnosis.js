import mongoose from "mongoose";

const formalDiagnosisSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    timeSlot: {
        type: String,
        required: true
    },
    diagnosisFor: {
        type: [String],
        default: []
    },
    mode: {
        type: String,
        required: true
    },
    isDone: { type: Boolean, default: false },
});


const FormalDiagnosis = mongoose.model('FormalDiagnosis', formalDiagnosisSchema);



const addFormalDiagnosis = async(email,date,timeSlot,diagnosisFor,mode)=>{
    const formalDiagnosis = new FormalDiagnosis({email, date, timeSlot, diagnosisFor, mode, isDone: false});
    await formalDiagnosis.save();
    console.log("Formal Diagnosis  added successfully");
}

module.exports = {addFormalDiagnosis};