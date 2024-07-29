import adminModel from '../models/adminAuth.js'
import bcrypt from "bcrypt"

const checkAdmin = async (email, password) => {
    try{
        const admin = await adminModel.findOne({ email: email });

        if (!admin) {
            console.log("Admin not found");
            return null;
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (isMatch) {
            return admin;
        } else {
            console.log("Incorrect password");
            return null;
        }
    } catch(err){
        console.log("Error authenticating admin", err);
    }
}

export default checkAdmin