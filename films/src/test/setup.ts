import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

// signin function returns a promise that resolves with a cookie (array of strings)
declare global {
  namespace NodeJS {
    interface Global {
      getAuthCookie(email: string): string[];
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
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  // stop server, disconnect mongoose from server
  await mongo.stop();
  await mongoose.connection.close();
});

// Builds cookie from scratch to use for testing
global.getAuthCookie = (email: string) => {
  // Build a JWT payload.  { id, email }
  const payload = {
    id: email,
    email,
  };

  // Create the JWT!
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Build session Object. { jwt: MY_JWT }
  const session = { jwt: token };

  // Turn that session into JSON
  const sessionJSON = JSON.stringify(session);

  // Take JSON and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString('base64');

  // return a string thats the cookie with the encoded data
  return [`express:sess=${base64}`];
};
