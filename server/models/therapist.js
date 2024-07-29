import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const therapistSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    center: String,
});

const therapistModel = mongoose.model('therapist', therapistSchema);

export default  therapistModel

// const addTherapist = (name, email, password, center) => {
//     try {
//         const existingTherapist = therapistModel.findOne({ email: email });
//         if (existingTherapist) {
//             console.log("Therapist already exists");
//             return;
//         }
//         else{
//             const hashedPassword = bcrypt.hash(password, 5);
//             const therapist = new therapistModel({ name, email, password: hashedPassword, center });
//             therapist.save();
//             console.log("Therapist added successfully");
//         }
//     }
//     catch (err) {
//         console.log("Error adding therapist", err);
//     }
// }


// const loginTherapist = (email, password) => {
//     try {
//         const therapist = therapistModel.findOne({ email
//         }); if (!therapist) {
//             console.log("Therapist not found");
//             return null;
//         }
//         const isMatch = bcrypt.compare(password, therapist.password);
//         if (isMatch) {
//             return jwt.sign(
//                 { email: therapist.email },
//                 process.env.JWT_SECRET_KEY,
//             );
//         }
//         else {
//             console.log("Incorrect password");
//             return null;
//         }
//     }
//     catch (err) {
//         console.log("Error authenticating therapist", err);
//     }
// }





// export default { therapistModel, addTherapist, loginTherapist };