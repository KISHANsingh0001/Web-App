require("dotenv");
const mongoose = require("mongoose");
const db_url = process.env.MONGO_URL;
const { response } = require("express");


const therapistModel = mongoose.model(('therapists', therapistSchema));
const therapyCenterModel = mongoose.model(('therapyCenters', therapyCenterSchema));

mongoose.connect(db_url).then(() => {
    console.log("Connected to the database");
    }).catch((err)=>{
    console.log('Error connecting to MongoDB', err);
    } );

const addTherapyCenter = async (centerName, centerLocation) => {
    try{
        const existingCenter = await therapyCenterModel.findOne({centerName: centerName});

        if (existingCenter){
            console.log("Center already exists");
            return;
        }

        const center = new therapyCenterModel({centerName, centerLocation, centerTherapists: [], centerCustomers: []});
        await center.save();

        console.log("Center added successfully");
    }catch(err){
        console.log("Error saving center response", err);
    }
}

const addTherapist = async (name, specialization, yearsOfExperience, email, phone) => {
    try{
        const existingTherapist = await therapistModel.findOne({name: name});

        if (existingTherapist){
            console.log("Therapist already exists");
            return;
        }

        const therapist = new therapistModel({name, specialization, yearsOfExperience, contactInfo: {email, phone}, associatedUsers: []});
        await therapist.save();

        console.log("Therapist added successfully");
    }catch(err){
        console.log("Error saving therapist response", err);
    }
}

const addTherapistToCenter = async (centerName, therapistName) => {
    try{
        const center = await therapyCenterModel.findOne({centerName: centerName});
        const therapist = await therapistModel.findOne({name: therapistName});

        if (!center || !therapist){
            console.log("Center or therapist not found");
            return;
        }

        center.centerTherapists.push(therapist);
        therapist.associatedUsers.push(center);

        await center.save();
        await therapist.save();

        console.log("Therapist added to center successfully");
    }catch(err){
        console.log("Error adding therapist to center", err);
    }
}

const addUserToTherapist = async (therapistName, userName) => {
    try{
        const therapist = await therapistModel.findOne({name: therapistName});
        const user = await userModel.findOne({name: userName});

        if (!therapist || !user){
            console.log("Therapist or user not found");
            return;
        }

        therapist.associatedUsers.push(user);
        
        await therapist.save();
    
    }catch(err){
        console.log("Error adding user to therapist", err);
        }
    }

module.exports = { therapistModel, therapyCenterModel, addTherapyCenter, addTherapist, addTherapistToCenter, addUserToTherapist };
