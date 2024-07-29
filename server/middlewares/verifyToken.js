import jwt from 'jsonwebtoken'

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Token is not valid" });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({ message: "Authorization header not found" });
    }
};

export default verifyJWT;