import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes/index';
import { updateTicketRouter } from './routes/update';

import { errorHandler, NotFoundError, currentUser } from '@ssiff-film/common';

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
app.use(currentUser); // placed after cookieSession so req.session property can be set first

// Route Handlers
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all('*', async (req: Request) => {
  throw new NotFoundError();
});

// Middlewares (auth)
app.use(errorHandler);

export { app };
