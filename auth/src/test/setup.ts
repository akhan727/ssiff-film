import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';

// signin function returns a promise that resolves with a cookie (array of strings)
declare global {
  namespace NodeJS {
    interface Global {
      getAuthCookie(email: string, password: string): Promise<string[]>;
    }
  }
}

let mongo: any;
beforeAll(async () => {
  // set env variable
  process.env.JWT_KEY = 'test-key';

  // create server and connect
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  // connect mongoose to server
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  // Resets data inbetween tests
  const collections = await mongoose.connection.db.collections();
  collections.forEach((collection) => collection.deleteMany({}));
});

afterAll(async () => {
  // stop server, disconnect mongoose from server
  await mongo.stop();
  await mongoose.connection.close();
});

global.getAuthCookie = async (email: string, password: string) => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({ email, password })
    .expect(201);

  const cookie = response.get('Set-Cookie');

  return cookie;
};
