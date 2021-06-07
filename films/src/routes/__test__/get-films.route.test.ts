import request from 'supertest';
import { app } from '../../app';
import { createFilm } from './create-film.route.test';

describe('Films retrieval: Get /api/films', () => {
  const endpoint = '/api/films';

  it('has a route handler listening to /api/films [GET]', async () => {
    const response = await request(app).get(endpoint).send({});
    expect(response.status).not.toEqual(404);
  });

  it('can fetch a list of films', async () => {
    const response = await request(app).get(endpoint).send({});
    expect(response.body.length).toEqual(0);

    await Promise.all([
      createFilm(
        'filmId',
        'title',
        'country',
        '2000',
        'director',
        100,
        'synopsis',
        'url'
        //[]
      ).expect(201),
      createFilm(
        'filmId',
        'title',
        'country',
        '2000',
        'director',
        100,
        'synopsis',
        'url'
        //[]
      ).expect(201),
      createFilm(
        'filmId',
        'title',
        'country',
        '2000',
        'director',
        100,
        'synopsis',
        'url'
        //[]
      ).expect(201),
    ]);

    const { body } = await request(app).get(endpoint).send({});
    expect(body.length).toEqual(3);
  });
});
