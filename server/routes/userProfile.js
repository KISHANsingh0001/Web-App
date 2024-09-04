// import express from "express";

// // // import userModel from '../models/auth.js';
// import { getUserData } from "../models/auth.js";
// // // import router from "./assessment.js";

// // // const router = express.Router();
// // // router.get('/api/userProfile', async(req,res)=>{
// // //     try {
        
// // //     } catch (error) {
// // //         console.error(error)
// // //         res.status(500).json({ message: 'Internal server error' });
// // //     }
// // // })







// const router = express.Router();

// // router.get('/userData', async (req, res) => {
// //     try {
// //         console.log("happy")
// //         const email = req.body.email; // Use email from the decoded token
// //         console.log(email)
// //         const userData = await getUserData(email);
// //         if (!userData) {
// //             return res.status(404).json({ message: 'User not found' });
// //         }
// //         res.json(userData);
// //     } catch (err) {
// //         res.status(500).json({ message: 'Internal server error' });
// //     }
// // });

// // export default router;











// router.get('/userData', async (req, res) => {
//     try {
        
//         console.log("happy");
//         // const token = 
//         const email = req.body.email; // Use query parameters for GET requests
//         console.log(email);
//         const userData = await getUserData(email);
//         if (!userData) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.json(userData);
//     } catch (err) {
//         res.status(500).json({ message: 'Internal server error' });
//     }

//     // console.log("happy")
// });


// export default router;















import express from "express";
import verifyJWT from "../middlewares/verifyToken.js"; // Adjust the path based on your directory structure
import { getUserData } from "../models/auth.js";

const router = express.Router();

// Secure the route with the verifyJWT middleware
router.get('/userdata', verifyJWT, async (req, res) => {
    try {
        // The email is extracted from the decoded token
        const email = req.user.email;
        console.log("Extracted email from token:", email);

        // Fetch user data based on the extracted email
        const userData = await getUserData(email);
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(userData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
