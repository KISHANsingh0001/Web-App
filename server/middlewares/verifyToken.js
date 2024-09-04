// import jwt from 'jsonwebtoken'

// const verifyJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     console.log('cuoooooooooooooooott',authHeader)
//     if (authHeader) {
//         const token = authHeader;
//         console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',token)
//         console.log(process.env.JWT_SECRET_KEY)
//         // res.send(token);
        
//         jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
//             if (err) {
//                 console.log(err)
//                 return res.status(403).json({ message: "Token is not valid" });
//             } else {
//                 req.user = decoded;
//                 console.log(req.user);
//                 next();
//             }
//         });
//     } else {
//         return res.status(401).json({ message: "Authorization header not found" });
//     }
// };

// export default verifyJWT;
















import jwt from 'jsonwebtoken';

const verifyJWT = (req, res, next) => {
    // Extract the Authorization header
    const authHeader = req.headers.authorization;
    console.log('Authorization Header:', authHeader);
    
    // Check if Authorization header is provided
    if (authHeader && authHeader.startsWith('Bearer ')) {
        // Extract the token from the Authorization header
        const token = authHeader.split(' ')[1];
        console.log('Extracted Token:', token);
        console.log('JWT Secret Key:', process.env.JWT_SECRET_KEY);
        
        // Verify the token using jwt.verify
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                console.error('JWT Verification Error:', err);
                return res.status(403).json({ message: "Token is not valid" });
            } else {
                // Attach the decoded user information to the request object
                req.user = decoded;
                console.log('Decoded User:', req.user);
                next();
            }
        });
    } else {
        // If the Authorization header is missing or not formatted correctly
        return res.status(401).json({ message: "Authorization header not found or not formatted correctly" });
    }
};

export default verifyJWT;
