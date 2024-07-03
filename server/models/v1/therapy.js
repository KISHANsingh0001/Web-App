const mongoose = require('mongoose');

const therapySessionSchema = new mongoose.Schema({
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
    typeOfTherapy: {
        type: [String],
        default: []
    }
});


const Therapy = mongoose.model('Therapy', therapySchema);


const addTherapySession = async(email,date,timeSlot,typeOfTherapy)=>{
    const therapy = new Therapy({email, date, timeSlot, typeOfTherapy});
    await therapy.save();
    console.log("Therapy session added successfully");
}


module.exports = {addTherapySession};