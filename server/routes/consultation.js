import express from 'express';
const router = express.Router();
import Consultation, { addConsultation } from '../models/consultation.js';
import { userModel } from '../models/auth.js';

router.get('/consultationdata', async (req, res) => {
    const { bookingType } = req.query;

    try {
        // Get today's date (midnight start)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Construct the query
        let query = {
            date: { $gte: today }, // Dates greater than or equal to today
        };

        // Add bookingType to query if provided
        if (bookingType) {
            query.bookingType = bookingType;
        }

        // Fetch consultations based on the query
        const consultations = await Consultation.find(query);

        // Handle case where no consultations are found
        if (!consultations?.length) {
            return res.status(404).json({ success: false, message: 'No consultations found' });
        }

        // Respond with the filtered consultations
        res.status(200).json({ success: true, consultations });
    } catch (error) {
        console.error('Error fetching consultation data:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});













































//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// router.post("/consultation", async (req, res) => {
//     const { email, date, timeSlot, mode, result, isDone } = req.body;
//     const bookingType = req.query.bookingType ; // Get bookingType from query, default to "General Booking" if not provided
//     // console.log()
//     console.log("Booking Type from Query:", bookingType);
//     console.log(req.body);

//     try {
//         // Save consultation with bookingType included
//         // console.log()
        
//         await addConsultation(email, date, timeSlot, bookingType, mode, result, isDone);
//         res.json({ success: true, message: "Consultation added successfully" });
//     } catch (error) {
//         console.error("Error adding consultation:", error);
//         res.status(500).json({ success: false, message: "Failed to add consultation" });
//     }
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



router.post("/consultation", async (req, res) => {
    const { email, date, timeSlot, mode, result, isDone } = req.body;
    const bookingType = req.query.bookingType; // Get bookingType from query

    console.log("Booking Type from Query:", bookingType);
    console.log(req.body);

    try {
        // Save consultation with bookingType included
        await addConsultation(email, date, timeSlot, bookingType, mode, result, isDone);

        // Update user booking information
        const user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Update the user's booking based on bookingType
        if (bookingType === "GeneralBooking") {
            user.booking.GeneralBooking.date = date;
            user.booking.GeneralBooking.timeSlot = timeSlot;
            user.booking.GeneralBooking.isdone = isDone;
        } else if (bookingType === "formalDiagnosis") {
            user.booking.formalDiagnosis.date = date;
            user.booking.formalDiagnosis.timeSlot = timeSlot;
            user.booking.formalDiagnosis.isdone = isDone;
        } else if (bookingType === "therapyTraining") {
            user.booking.therapyTraining.date = date;
            user.booking.therapyTraining.timeSlot = timeSlot;
            user.booking.therapyTraining.isdone = isDone;
        }

        // Save the updated user profile
        await user.save();
        console.log("happpppppppppppppppppppyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",user)

        res.json({ success: true, message: "Consultation added and user booking updated successfully", User:user});
    } catch (error) {
        console.error("Error adding consultation:", error);
        res.status(500).json({ success: false, message: "Failed to add consultation" });
    }
});



export default router;







// Route to fetch future consultations

// router.get("/consultationdata", async (req, res) => {
//     const { email } = req.query;

//     if (!email) {
//         return res.status(400).json({ success: false, message: "Email query parameter is required" });
//     }

//     try {
//         const consultations = await Consultation.find({
//             email: email.trim(),
//             date: { $gte: new Date() } // Fetching future consultations
//         });

//         console.log(consultations)

//         if (consultations.length === 0) {
//             return res.status(404).json({ success: false, message: "No future consultations found" });
//         }

//         const formattedConsultations = consultations.map(({ date, timeSlot }) => ({
//             date: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
//             timeSlot
//         }));

//         res.json({
//             success: true,
//             consultations: formattedConsultations
//         });
//     } catch (error) {
//         console.error('Error fetching consultation data:', error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// });






















// // Route to fetch future consultations
// router.get("/consultationdata", async (req, res) => {
//     try {
//         // Fetching all consultations with a date greater than or equal to today
//         const consultations = await Consultation.find({
//             date: { $gte: new Date() } // Fetching future consultations
//         });
        
//         console.log(consultations);
        
//         if (consultations.length === 0) {
//             return res.status(404).json({ success: false, message: "No future consultations found" });
//         }
        
//         const formattedConsultations = consultations.map(({ date, timeSlot }) => ({
//             date: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
//             timeSlot
//         }));
        
//         res.json({
//             success: true,
//             consultations: formattedConsultations
//         });
//     } catch (error) {
//         console.error('Error fetching consultation data:', error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// });

// export default router;
























// // Route to fetch consultations for a specific date
// router.get("/consultationdata", async (req, res) => {
//     try {
//         const { date } = req.query; // Get the date from query parameters

//         if (!date) {
//             return res.status(400).json({ success: false, message: "Date query parameter is required" });
//         }

//         // Fetching consultations for the specific date
//         const consultations = await Consultation.find({
//             date: date // Match consultations exactly on the provided date (in YYYY-MM-DD format)
//         });

//         if (consultations.length === 0) {
//             return res.status(404).json({ success: true, consultations: [] });
//         }

//         // Map and format consultations
//         const formattedConsultations = consultations.map(({ date, timeSlot }) => ({
//             date: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
//             timeSlot
//         }));

//         res.json({
//             success: true,
//             consultations: formattedConsultations
//         });
//     } catch (error) {
//         console.error('Error fetching consultation data:', error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// });

// export default router;































// router.get("/consultationdata", async (req, res) => {
//     try {
//         // Get the date from the query parameter
//         const { date } = req.query;

//         // If no date is provided, return an error
//         if (!date) {
//             return res.status(400).json({ success: false, message: "Date is required" });
//         }

//         // Create a Date object from the provided date
//         const givenDate = new Date(date);

//         // Validate the date
//         if (isNaN(givenDate)) {
//             return res.status(400).json({ success: false, message: "Invalid date format" });
//         }

//         // Fetching all consultations with a date greater than or equal to the given date
//         const consultations = await Consultation.find({
//             date: { $gte: givenDate } // Fetching consultations from the given date onwards
//         });

//         console.log(consultations);

//         if (consultations.length === 0) {
//             return res.status(404).json({ success: false, message: "No future consultations found" });
//         }

//         // Format the consultations for the response
//         const formattedConsultations = consultations.map(({ date, timeSlot }) => ({
//             date: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
//             timeSlot
//         }));

//         res.json({
//             success: true,
//             consultations: formattedConsultations
//         });
//     } catch (error) {
//         console.error('Error fetching consultation data:', error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// });

// export default router;

































// router.get("/consultation-data", async (req, res) => {
//     try {
//         // Get the date and booking type from the query parameters
//         const { date, bookingType } = req.query;
//         console.log("gussssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssa ar", bookingType)
//         // Use today's date if no date is provided
//         const today = new Date();
//         today.setHours(0, 0, 0, 0); // Reset the time part to 00:00

//         // Use the given date if provided; otherwise, use today's date
//         // const givenDate = date ? new Date(date) : today;
//         const givenDate = today;
//         console.log(givenDate)

//         // Validate the given date
//         if (isNaN(givenDate)) {
//             return res.status(400).json({ success: false, message: "Invalid date format" });
//         }

//         // Ensure the time part is reset for the given date as well
//         givenDate.setHours(0, 0, 0, 0);

//         // Create a filter object for the query
//         const filter = {
//             date: { $gte: givenDate }, // Filter for consultations from the given date or later
//         };
//         console.log("aaaaaaaaaaaaarrrrrzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",filter)
//         // Apply booking type filter if provided
//         if (bookingType) {
//             filter.bookingType = bookingType;
            
//         }

//         // Fetch consultations based on the filters (date and bookingType)
//         const consultations = await Consultation.find(filter);

//         // if (consultations.length === 0) {
//         //     return res.status(404).json({ success: false, message: "No future consultations found" });
//         // }
//         let formattedConsultations=[]
//         if(consultations.length>0){
//              formattedConsultations = consultations.map(({ date, timeSlot }) => ({
//                 date: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
//                 timeSlot
//             }));
    
//         }else {

//             res.json({
//                 success: true,
//                 consultations: formattedConsultations
//             });
//         }
//         // Format the consultations for the response
      
//     } catch (error) {
//         console.error('Error fetching consultation data:', error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// });


