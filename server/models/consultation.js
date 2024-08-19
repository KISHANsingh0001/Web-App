import mongoose from "mongoose";
// const Resend = require('resend');
// const resend = new Resend.Resend('re_123456789');

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
    },
    // mode: {
    //     type: String,
    //     required: true
    
    // },
    isDone: { type: Boolean, default: false },
    result:{
        type:String
    }
});

const Consultation = mongoose.model('Consultation', consultationSchema);
<<<<<<< HEAD
export default Consultation
export const addConsultation = async (email, date, timeSlot,mode,result,isDone) => {
    const consultation = new Consultation({ email, date, timeSlot , mode, isDone,result});
=======


export const addConsultation = async (email, date, timeSlot,mode) => {
    const consultation = new Consultation({ email, date, timeSlot , mode, isDone: false});
>>>>>>> 5e00446987c3e76d19cdb226fdc40001a43b25d3
    await consultation.save();
    console.log("Consultation added successfully");
}


// const mailUser = async (email, date, timeSlot) => {
//     await resend.emails.send({
//         from: 'Acme <onboarding@resend.dev>',
//         to: ['delivered@resend.dev'],
//         subject: 'hello world',
//         text: 'it works!',
//         attachments: [
//             {
//                 filename: 'invoice.pdf',
//                 content: invoiceBuffer,
//             },
//         ],
//         headers: {
//             'X-Entity-Ref-ID': '123456789',
//         },
//         tags: [
//             {
//                 name: 'category',
//                 value: 'confirm_email',
//             },
//         ],
//     });
// }


export default { addConsultation}





