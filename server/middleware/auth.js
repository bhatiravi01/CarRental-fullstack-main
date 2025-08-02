import jwt from 'jsonwebtoken'
import User from '../models/User.js';

export const protect = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.json({ success: false, message: "You are not logged in" });
    }

    try {
        const userId = jwt.verify(token, process.env.JWT_SECRET);         // originally jwt.decode was used here

        if (!userId) {
            return res.json({ success: false, message: "You are not signed up" });
        }
        req.user = await User.findById(userId).select("-password");

        next();
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: "not authorized" });
    }
}
