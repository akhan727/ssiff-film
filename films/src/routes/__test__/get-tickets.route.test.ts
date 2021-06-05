import request from 'supertest';
import { app } from '../../app';

const createFilm = () => {
  return request(app)
    .post('/api/films')
    .set('Cookie', global.getAuthCookie())
    .send({
      title: 'asldkf',
      price: 20,
    });
};

it('can fetch a list of films', async () => {
  await createFilm();
  await createFilm();
  await createFilm();

  const response = await request(app).get('/api/films').send().expect(200);

  //console.log('Body: ', response.body);
  expect(response.body.length).toEqual(3);
});
