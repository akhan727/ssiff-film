import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/api/users/currentuser', (req: Request, res: Response) => {
  
  // If user doesn't have 'req.session.jwt' set or JWT is invalid, return early
  if (!req.session?.jwt) {
    return res.send({ currentUser: null });
  }

  // Validate payload and send back to client
  try {
    // jwt.verify(token,secretOrPrivateKey,[options,callback])
    const payload = jwt.verify(
      req.session.jwt, 
      process.env.JWT_KEY!
    );
    res.send({ currentUser: payload });
  } catch (err) {
    // If JWT has been tampered with, verify() will throw an error
    // This try-catch-block will be used to catch that possible error
    res.send({ currentUser: null });
  }
});

export { router as currentUserRouter };