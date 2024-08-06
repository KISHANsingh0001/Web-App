import mongoose from "mongoose";


const therapistSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    center: String,
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }]
});

const therapistModel = mongoose.model('therapist', therapistSchema);

export default  therapistModel;

