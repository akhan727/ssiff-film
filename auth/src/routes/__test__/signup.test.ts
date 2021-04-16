import request from 'supertest';
import { app } from '../../app';

describe('/api/users/signup', () => {
  const endpoint = '/api/users/signup';
  const newUser = { email: 'test@test.com', password: 'password' };

  it('returns a 201 on successful signup', async () => {
    return request(app).post(endpoint).send(newUser).expect(201);
  });

  it('returns a 400 with an invalid email', async () => {
    const { body } = await request(app)
      .post(endpoint)
      .send({ email: 'invalid email', password: 'password' })
      .expect(400);

    // console.log(body.errors);
    expect(body).toHaveProperty('errors');
    expect(body.errors).toHaveLength(1);
    expect(body.errors[0]).toHaveProperty('field');
    expect(body.errors[0].field).toEqual('email');
  });

  it('returns a 400 with an invalid password', async () => {
    const { body } = await request(app)
      .post(endpoint)
      .send({ email: 'test@test.com', password: 'p' })
      .expect(400);

    // console.log(body.errors);
    expect(body.errors).toBeDefined();
    expect(body.errors).toHaveLength(1);
    expect(body.errors[0].field).toBeDefined();
    expect(body.errors[0].field).toEqual('password');
  });

  it('returns a 400 with missing email and password', async () => {
    await request(app)
      .post(endpoint)
      .send({ email: 'test@test.com' })
      .expect(400);

    await request(app)
      .post(endpoint)
      .send({ password: 'password' })
      .expect(400);
  });

  it('disallows duplicate emails', async () => {
    await request(app).post(endpoint).send(newUser).expect(201);

    await request(app).post(endpoint).send(newUser).expect(400);
  });

  it('sets a cookie after successful signup', async () => {
    const response = await request(app)
      .post(endpoint)
      .send(newUser)
      .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();
  });
});
