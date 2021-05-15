import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { PasswordUtils } from '../utils/password.utils';
import { User } from '../models/user.model';
import { validateRequest, BadRequestError } from '@ssiff-film/common';
import { SignInDto } from '../dtos/signin.dto';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password!'),
  ],
  validateRequest,
  async (req: Request<{}, {}, SignInDto>, res: Response) => {
    // Extract user input from request
    const { email, password } = req.body;

    // Find out if user input email exists, throw error if it doesn't
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError('Invalid email or password!');
    }

    // Find out if user input password is correct, throw error if its not
    const passwordMatch = await PasswordUtils.compare(
      existingUser.password,
      password
    );
    if (!passwordMatch) {
      throw new BadRequestError('Invalid email or password!');
    }

    // Generate JWT
    const userJWT = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      process.env.JWT_KEY!
    );

    // Store it on the session object
    req.session = {
      jwt: userJWT,
    };

    res.status(200).send(existingUser);
  }
);

export { router as signinRouter };
