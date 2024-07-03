const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
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
    }
});

const Consultation = mongoose.model('Consultation', consultationSchema);

const addConsultation = async (email, date, timeSlot) => {
    const consultation = new Consultation({ email, date, timeSlot });
    await consultation.save();
    console.log("Consultation added successfully");
}

module.exports = { addConsultation };