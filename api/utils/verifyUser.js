import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token){
        console.log('Token hi nhi mila') // token sahi me nahi mil rha, isko theek krna hai
        return next(errorHandler(401, 'Unauthorized'));
    }
    jwt.verify(token, 'jashan', (err, user) => {
        if(err){
            console.log(err.message);
            return next(errorHandler(401, 'Unauthorized'));
        }
        req.user = user;
        next();
    });
};