import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('returns a 404 if the film is not found', async () => {
  // Create film ID
  const id = new mongoose.Types.ObjectId().toHexString();

  // Attemp to access non-existant film
  await request(app).get(`/api/films/${id}`).send().expect(404);
});

it('returns the film if the film is found', async () => {
  const title = 'concert';
  const price = 20;

  // Create new film as authorized user
  const response = await request(app)
    .post('/api/films')
    .set('Cookie', global.getAuthCookie())
    .send({
      title,
      price,
    })
    .expect(201);

  // Access film with film ID
  const filmResponse = await request(app)
    .get(`/api/films/${response.body.id}`)
    .send()
    .expect(200);

  // Confirm found film
  expect(filmResponse.body.title).toEqual(title);
  expect(filmResponse.body.price).toEqual(price);
});
