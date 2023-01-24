import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Constants } from '../constants';

export const comparePasswords = (password, hashedPassord) => {
    return bcrypt.compare(password, hashedPassord);
};

export const hashPassword = (password) => {
    return bcrypt.hash(password, Constants.SALT);
}

export const createJWT = ({ id, email }) => {
    const token = jwt.sign({
        id,
        email,
    },
        process.env.JWT_SECRET
    );
    return token;
}

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(Constants.ERROR_CODES.UNAUTHORIZED);
        res.json({ message: 'Not authorized' });
        return;
    }

    const [, token] = bearer.split(' ');

    if (!token) {
        res.status(Constants.ERROR_CODES.UNAUTHORIZED);
        res.json({ message: 'Not authorized' });
        return;
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (e) {
        console.error(e);
        res.status(Constants.ERROR_CODES.UNAUTHORIZED);
        res.json({ message: 'not valid token' });
        return;
    }
}