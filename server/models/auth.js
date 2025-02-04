import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    age: Number,
    isParent: Boolean,
    isEnrolled: {
        type: Boolean,
        default: false
    },
    serviceID: String,
    teststaken: {
        type: Number,
        default: 0
    },
    assesmentResponses: {
        type: [String],
        default: []
    },
    booking: {
        GeneralBooking: {
            date: {
                type: Date,
                default: null
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
        formalDiagnosis: {
            date: {
                type: Date,
                default: null
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
                default: null
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
        if (existingUser) {
            return { success: false, message: "User already exists" };
        }

        const hashedPassword = await bcrypt.hash(password, 5);

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
                GeneralBooking: { date: null, timeSlot: "", isdone: false },
                formalDiagnosis: { date: null, timeSlot: "", isdone: false },
                therapyTraining: { date: null, timeSlot: "", isdone: false }
            },
        });

        await user.save();
        return { success: true, user };
    } catch (err) {
        console.log("Error saving user response:", err);
        return { success: false, message: "Something went wrong" };
    }
};

const authenticateUser = async (email, password) => {
    try {
        const user = await userModel.findOne({ email: email });
        if (!user) {
            return false;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        return isMatch;
    } catch (err) {
        console.log("Error authenticating user:", err);
        return false;
    }
};

const getUserData = async (email) => {
    try {
        const user = await userModel.findOne({ email: email });
        if (!user) {
            throw new Error('User not found');
        }

        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            age: user.age,
            isParent: user.isParent,
            isEnrolled: user.isEnrolled,
            serviceID: user.serviceID,
            teststaken: user.teststaken,
            assesmentResponses: user.assessmentResponses,
            booking: user.booking,
        };
    } catch (err) {
        console.log("Error getting user data:", err);
        throw err;
    }
};

export { addUser, authenticateUser, getUserData, userModel };
