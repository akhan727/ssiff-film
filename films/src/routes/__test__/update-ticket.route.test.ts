import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { Film } from '../../models/film.model';

it('returns a 404 if the provided id does not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/films/${id}`)
    .set('Cookie', global.getAuthCookie())
    .send({
      title: 'aslkdfj',
      price: 20,
    })
    .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/films/${id}`)
    .send({
      title: 'aslkdfj',
      price: 20,
    })
    .expect(401);
});

it('returns a 401 if the user does not own the film', async () => {
  const response = await request(app)
    .post('/api/films')
    .set('Cookie', global.getAuthCookie())
    .send({
      title: 'asldkfj',
      price: 20,
    });

  await request(app)
    .put(`/api/films/${response.body.id}`)
    .set('Cookie', global.getAuthCookie())
    .send({
      title: 'alskdjflskjdf',
      price: 1000,
    })
    .expect(401);
});

it('returns a 400 if the user provides an invalid title or price', async () => {
  const cookie = global.getAuthCookie();

  const response = await request(app)
    .post('/api/films')
    .set('Cookie', cookie)
    .send({
      title: 'asldkfj',
      price: 20,
    });

  await request(app)
    .put(`/api/films/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: '',
      price: 20,
    })
    .expect(400);

  await request(app)
    .put(`/api/films/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'alskdfjj',
      price: -10,
    })
    .expect(400);
});

it('updates the film provided valid inputs', async () => {
  const cookie = global.getAuthCookie();

  const response = await request(app)
    .post('/api/films')
    .set('Cookie', cookie)
    .send({
      title: 'asldkfj',
      price: 20,
    });

  await request(app)
    .put(`/api/films/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'new title',
      price: 100,
    })
    .expect(200);

  const filmResponse = await request(app)
    .get(`/api/films/${response.body.id}`)
    .send();

  expect(filmResponse.body.title).toEqual('new title');
  expect(filmResponse.body.price).toEqual(100);
});

it('publishes an event', async () => {
  const cookie = global.getAuthCookie();

  const response = await request(app)
    .post('/api/films')
    .set('Cookie', cookie)
    .send({
      title: 'asldkfj',
      price: 20,
    });

  await request(app)
    .put(`/api/films/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'new title',
      price: 100,
    })
    .expect(200);
});

it('rejects updates if the film is reserved', async () => {
  const cookie = global.getAuthCookie();

  const response = await request(app)
    .post('/api/films')
    .set('Cookie', cookie)
    .send({
      title: 'asldkfj',
      price: 20,
    });

  const film = await Film.findById(response.body.id);
  film!.set({ orderId: mongoose.Types.ObjectId().toHexString() });
  await film!.save();

  await request(app)
    .put(`/api/films/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'new title',
      price: 100,
    })
    .expect(400);
});
