import request from 'supertest';
import { app } from '../../app';
import { Film } from '../../models/film.model';

it('has a route handler listening to /api/films for post requests', async () => {
  const response = await request(app).post('/api/films').send({});

  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  const response = await request(app).post('/api/films').send({}).expect(401);

  expect(response.status).toEqual(401);
});

it('returns a status other than 401 is user is signed in', async () => {
  const response = await request(app)
    .post('/api/films')
    .set('Cookie', global.getAuthCookie())
    .send({});

  expect(response.status).not.toEqual(401);
});

it('returns an error if an invalid title is provided', async () => {
  await request(app)
    .post('/api/films')
    .set('Cookie', global.getAuthCookie())
    .send({
      title: '',
      price: 10,
    })
    .expect(400);

  await request(app)
    .post('/api/films')
    .set('Cookie', global.getAuthCookie())
    .send({
      price: 10,
    })
    .expect(400);
});

it('returns an error if an invalid price is provided', async () => {
  await request(app)
    .post('/api/films')
    .set('Cookie', global.getAuthCookie())
    .send({
      title: 'title',
      price: -10,
    })
    .expect(400);

  await request(app)
    .post('/api/films')
    .set('Cookie', global.getAuthCookie())
    .send({
      title: 'title',
    })
    .expect(400);
});

it('creates a film with valid inputs', async () => {
  let films = await Film.find({});
  expect(films.length).toEqual(0);

  const title = 'title';

  await request(app)
    .post('/api/films')
    .set('Cookie', global.getAuthCookie())
    .send({
      title,
      price: 20,
    })
    .expect(201);

  films = await Film.find({});
  expect(films.length).toEqual(1);
  expect(films[0].price).toEqual(20);
  expect(films[0].title).toEqual(title);
});
