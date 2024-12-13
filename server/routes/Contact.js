// import express from "express";
// import mongoose from "mongoose";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();

// // Define the Contact schema
// const contactSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String },
//   inquiryType: { type: String },
//   message: { type: String, required: true },
//   agreeToPolicy: { type: Boolean, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// // Create the Contact model
// const Contact = mongoose.model("Contact", contactSchema);

// // Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user:"projecttasks914@gmail.com",
//     pass: "vbez vqcu puds siic",
//   },
// });

// // Test Email Configuration
// transporter.verify((error) => {
//   if (error) {
//     console.error("Email server error:", error);
//   } else {
//     console.log("Email server is ready");
//   }
// });

// // Submit Contact Form Route
// router.post("/contact", async (req, res) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       phone,
//       inquiryType,
//       message,
//       agreeToPolicy,
//     } = req.body;

//     if (!firstName || !lastName || !email || !message || !agreeToPolicy) {
//       return res.status(400).json({ error: "Required fields are missing" });
//     }

//     const newContact = new Contact({
//       firstName,
//       lastName,
//       email,
//       phone,
//       inquiryType,
//       message,
//       agreeToPolicy,
//     });

//     await newContact.save();

//     // Send Email
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to:"zeenathkousar11@gmail.com", // Define the receiver in environment variables for flexibility
//       subject: "Thank you for contacting us!",
//       html: `
//         <h1>Hello ${firstName},</h1>
//         <p>Thank you for reaching out to us. Here are the details of your inquiry:</p>
//         <ul>
//           <li><strong>Full Name:</strong> ${firstName} ${lastName}</li>
//           <li><strong>Email:</strong> ${email}</li>
//           <li><strong>Phone:</strong> ${phone || "N/A"}</li>
//           <li><strong>Inquiry Type:</strong> ${inquiryType || "General"}</li>
//           <li><strong>Message:</strong> ${message}</li>
//         </ul>
//         <p>We will get back to you shortly!</p>
//         <p>Best regards, <br> The Leeza.app Team</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(201).json({ message: "Contact form submitted and email sent successfully" });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;




import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "leezacontact@gmail.com", // Email from .env
    pass: "gdjg yjnk ygwb rhlg", // Password or App Password from .env
  },
});

// Test Email Configuration
transporter.verify((error) => {
  if (error) {
    console.error("Email server error:", error);
  } else {
    console.log("Email server is ready");
  }
});

// Submit Contact Form Route
router.post("/contact", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      inquiryType,
      message,
      agreeToPolicy,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message || !agreeToPolicy) {
      return res.status(400).json({ error: "Required fields are missing" });
    }

    // Send Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "zeenathkousar11@gmail.com", // Define the receiver email address
      subject: "Details of your client !",
      html: `
       
       
        <ul>
          <li><strong>Full Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || "N/A"}</li>
          <li><strong>Inquiry Type:</strong> ${inquiryType || "General"}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(201).json({ message: "Contact form submitted and email sent successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;

