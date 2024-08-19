import therapistModel from '../models/therapist.js'
import bcrypt from "bcrypt"

const authenticateTherapist = async (email, password) => {
    try{
        const therapist = await therapistModel.findOne({ email });

        if(!therapist){
            return res.status(404).json({ message: "Therapist not found" });
        }

        const isMatch = await bcrypt.compare(password, therapist.password);

        if(isMatch){
            return res.status(200).json({ message: "Therapist authenticated" });
        }
        else{
            return res.status(401).json({ message: "Incorrect password" });
        }
    }
    catch (err) {
         console.log("Error authenticating therapist", err);
     }
}


const addTherapist = async (name, email, password, center) => {
    try{
        const existingTherapist = await therapistModel.findOne({ email });

        if(existingTherapist){
            return res.status(409).json({ message: "Therapist already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        const therapist = new therapistModel({ name, email, password: hashedPassword, center });
        therapist.save();
        
        console.log("Therapist added successfully");

    }catch(err){
        console.log("Error adding therapist", err);
    }
}

export { authenticateTherapist, addTherapist };