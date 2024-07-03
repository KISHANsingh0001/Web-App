const mongoose = require('mongoose');

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
    }
});


const FormalDiagnosis = mongoose.model('FormalDiagnosis', formalDiagnosisSchema);



const addFormalDiagnosis = async(email,date,timeSlot,diagnosisFor)=>{
    const formalDiagnosis = new FormalDiagnosis({email, date, timeSlot, diagnosisFor});
    await formalDiagnosis.save();
    console.log("Formal Diagnosis  added successfully");
}

module.exports = {addFormalDiagnosis};