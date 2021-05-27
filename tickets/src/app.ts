import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { createTicketRouter } from './routes/create-ticket.route';
import { showTicketRouter } from './routes/get-ticket.route.ts';
import { indexTicketRouter } from './routes/get-tickets.route';
import { updateTicketRouter } from './routes/update-ticket.route';

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
