import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config";
import { findUserById } from '../services/UserService';
import MESSAGE from '../helper/message';

export const createToken = (email: any, userId: any) => {
    return jwt.sign({ email, userId }, JWT_SECRET, { expiresIn: '90d' });
};

export const verifyToken = async (req: any, res: any, next: any) => {
    try {
        const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers["authorization"];

        if (!token) {
            return res.status(403).json({ status: MESSAGE.Failed, message: 'A token is required for authentication' });
        }

        // Check if the token starts with "Bearer " and remove it
        const tokenWithoutBearer = token.replace(/^Bearer\s+/i, '');

        const decoded = await jwt.verify(tokenWithoutBearer, JWT_SECRET);

        // Attach decoded user data to the request object
        req.userData = decoded;

        const user = await findUserById(req.userData.userId);
        if (!user) {
            return res.status(404).json({ error: MESSAGE.INVALID_TOKEN });
        }

        // Find user by user ID extracted from the token
        const findData = await findUserById(req.userData.userId);
        if (findData) {
            // If user is found, proceed to the next middleware
            next();
        } else {
            // If user is not found, throw an unauthorized error
            throw { status: 401, message: MESSAGE.UNAUTHORIZED };
        }

    } catch (err: any) {
        if (err.status === 401) {
            // Unauthorized error
            return res.status(401).send({ status: MESSAGE.Failed, message: err.message });
        } else {
            // Other errors
            return res.status(400).send({ statusCode: 0, message: err.toString() });
        }
    }
};
export const verifyAdminToken = async (req: any, res: any, next: any) => {
    try {
        const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers["authorization"];

        if (!token) {
            return res.status(403).json({ status: MESSAGE.Failed, message: 'A token is required for authentication' });
        }

        const decoded = await jwt.verify(token.replace(/^Bearer\s+/i, ''), JWT_SECRET);
        req.userData = decoded;

        const findData = await findUserById(req.userData.userId)
        if (findData && findData.email == "superAdmin@mailinator.com") {
            next();
        }
        else {
            throw { status: 401, message: MESSAGE.UNAUTHORIZED };
        }

    } catch (err: any) {
        if (err.status === 401) {
            return res.status(401).send({ status: MESSAGE.Failed, message: err.message });
        } else {
            return res.status(400).send({ stausCode: 0, message: err.toString() });
        }
    }
};
