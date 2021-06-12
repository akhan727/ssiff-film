import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { createFilmRouter } from './routes/create-film.route';
import { showFilmRouter } from './routes/get-film.route';
import { indexFilmRouter } from './routes/get-films.route';

import { errorHandler, NotFoundError, currentUser } from '@ssiff-film/common';

// Middlewares (express)
const app = express();
app.set('trust proxy', true); // Tells Express to trust Ingress-Nginx proxy
app.use(json());
app.use(
  cookieSession({
    signed: false, // Disable the encription
    //secure: process.env.NODE_ENV !== 'test', // Only send cookies to https connections
    secure: false,
  })
);
app.use(currentUser); // placed after cookieSession so req.session property can be set first

// Route Handlers
app.use(createFilmRouter);
app.use(showFilmRouter);
app.use(indexFilmRouter);

app.all('*', async (req: Request) => {
  throw new NotFoundError();
});

// Middlewares (auth)
app.use(errorHandler);

export { app };
