import mongoose from "mongoose";
import bcrypt from "bcrypt"
// import { FormalDiagnosis } from "./formalDiagnosis";

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     phone: String,
//     age: Number,
//     isParent: Boolean,
//     isEnrolled: Boolean,
//     serviceID: String,
//     teststaken: Number,
    
//     assesmentResponses: Array,
//     booking:{
//         GeneralBooking:{
//             date:Date,
//             timeSlot:String,
//             isdone : Boolean,
//         },
//         formalDiagnosis:{
//             date:Date,
//             timeSlot:String,
//             isdone : Boolean,
//         },
//         therapyTraining:{
//             date:Date,
//             timeSlot:String,
//             isdone : Boolean,
//         },

//     },
// });









const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    age: Number,
    isParent: Boolean,
    isEnrolled: {
        type: Boolean,
        default: false // Set default value for isEnrolled
    },
    serviceID: String,
    teststaken: {
        type: Number,
        default: 0 // Set default value for teststaken
    },
    assesmentResponses: {
        type: [String], // Assuming this is an array of strings
        default: []
    },
    booking: {
        GeneralBooking: {
            date: {
                type: Date,
                default: null // Default to null or you can set to a specific date if required
            },
            timeSlot: {
                type: String,
                default: "" // Default to an empty string
            },
            isdone: {
                type: Boolean,
                default: false // Default to false
            },
        },
        formalDiagnosis: {
            date: {
                type: Date,
                default: null // Default to null
            },
            timeSlot: {
                type: String,
                default: ""
            },
            isdone: {
                type: Boolean,
                default: false
            },
        },
        therapyTraining: {
            date: {
                type: Date,
                default: null // Default to null
            },
            timeSlot: {
                type: String,
                default: ""
            },
            isdone: {
                type: Boolean,
                default: false
            },
        },
    },
});









const userModel = mongoose.model('users', userSchema);

const addUser = async (name, email, phone, age, isParent, password) => {
    try {
        const existingUser = await userModel.findOne({ email: email });
        console.log(existingUser);

        if (existingUser) {
            
            console.log("User already exists");
            return ;
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        // const user = new userModel({ name, email, password: hashedPassword, phone, age, isParent, isEnrolled: false, serviceID: "", teststaken: 0, assesmentResponses: []});

        const user = new userModel({ 
            name, 
            email, 
            password: hashedPassword, 
            phone, 
            age, 
            isParent, 
            isEnrolled: false, 
            serviceID: "", 
            teststaken: 0, 
            assesmentResponses: [],
            booking: {
                GeneralBooking: {
                    date: null, // or set a default date
                    timeSlot: "",
                    isdone: false,
                },
                formalDiagnosis: {
                    date: null, // or set a default date
                    timeSlot: "",
                    isdone: false,
                },
                therapyTraining: {
                    date: null, // or set a default date
                    timeSlot: "",
                    isdone: false,
                },
            },
        });
        
        await user.save();
        res.json(user);
        console.log(user)
        
        console.log("User added successfully");
    } catch (err) {
        console.log("Error saving user response:", err);
    }
}

const authenticateUser = async (email, password) => {
    try {
        const user = await userModel.findOne({ email: email });
        console.log("Authenticating user with email:", email); // Log email
        if (!user) {
            console.log("User not found for email:", email); // Log user not found
            return false;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            console.log("Authentication successful for email:", email); 
            return true;
        } else {
            console.log("Invalid credentials for email:", email); 
            return false;
        }
    } catch (err) {
        console.log("Error authenticating user:", err);
        return false;
    }
}

// const getUserData = async (email) => {
//     try {
//         const user = await userModel.findOne({ email: email });
//         console.log(user);
//         return {
//             email: user.email,
//             name: user.name,
//             isParent: user.isParent,
//             isEnrolled: user.isEnrolled,
//             serviceID: user.serviceID,
//             booking:user.booking,
//         };
//     } catch (err) {
//         console.log("Error getting user data:", err);
//     }
// }








const getUserData = async (email) => {
    try {
        const user = await userModel.findOne({ email: email });
        if (!user) {
            throw new Error('User not found');
        }

        console.log(user); // Log the entire user object for debugging

        return {
            _id: user._id, // Include user ID
            name: user.name,
            email: user.email,
            phone: user.phone, // Include phone number
            age: user.age, // Include age
            isParent: user.isParent, // Check if user is a parent
            isEnrolled: user.isEnrolled, // Check if user is enrolled
            serviceID: user.serviceID, // Include service ID
            teststaken: user.teststaken, // Include tests taken count
            assessmentResponses: user.assessmentResponses, // Include assessment responses
            booking: {
                GeneralBooking: {
                    date: user.booking.GeneralBooking.date,
                    timeSlot: user.booking.GeneralBooking.timeSlot,
                    isdone: user.booking.GeneralBooking.isdone,
                },
                formalDiagnosis: {
                    date: user.booking.formalDiagnosis.date,
                    timeSlot: user.booking.formalDiagnosis.timeSlot,
                    isdone: user.booking.formalDiagnosis.isdone,
                },
                therapyTraining: {
                    date: user.booking.therapyTraining.date,
                    timeSlot: user.booking.therapyTraining.timeSlot,
                    isdone: user.booking.therapyTraining.isdone,
                },
            },
        };
    } catch (err) {
        console.log("Error getting user data:", err);
        throw err; // Optionally rethrow the error to handle it further up
    }
};


















export { addUser, authenticateUser, getUserData, userModel };