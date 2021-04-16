import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Properties that a payload has
interface UserPayload {
  id: string;
  email: string;
}

// Augment the existing Request interface (within the Express project) 
// by adding an additional property of a currentUser, that may or may
// may not be defined (because the user might not be logged), set to 
// type UserPayload
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

// Any time a user comes into a route, with currentUser middleware being
// applied, this function will...
export const currentUser = (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  
  // Check if user is logged in
  // If user doesn't have 'req.session.jwt' set or JWT is invalid, 
  // continue on, in which case, currentUser is undefined
  if (!req.session?.jwt) {
    return next();
  }

  // If user has JWT, verify/decode and set to payload  
  // Set it on currentUser so it can be used by other middlewares 
  // or the actual request handler
  try {
    // jwt.verify(token,secretOrPrivateKey,[options,callback])
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    req.currentUser = payload;
  } catch (err) {
    // If JWT has been tampered with, verify() will throw an error
    // This try-catch-block will be used to catch that possible error
  }

  next();
};