import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError } from '@ssiff-film/common';

// Middlewares (express)
const app = express();
app.set('trust proxy', true); // Tells Express to trust Ingress-Nginx proxy
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

// Route Handlers

app.all('*', async (req: Request) => {
  throw new NotFoundError();
});

// Middlewares (auth)
app.use(errorHandler);

export { app };
