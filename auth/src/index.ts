import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

// Middlewares (express)
const app = express();
app.set('trust proxy', true); // Tells Express to trust Ingress-Nginx proxy
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true
  })
);

// Route Handlers
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

// Middlewares (auth)
app.use(errorHandler);

const start = async () => {
  // Checks if jwt key environment variable is defined
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined!');
  }
  
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Connected to MongoDB...!')
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000...!');
  });
};

start();