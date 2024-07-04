const mongoose = require('mongoose');
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
    mode: String
});

const Consultation = mongoose.model('Consultation', consultationSchema);

const addConsultation = async (email, date, timeSlot) => {
    const consultation = new Consultation({ email, date, timeSlot });
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

module.exports = { addConsultation}




