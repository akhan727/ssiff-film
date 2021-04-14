import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';

let mongo: any;

// Hook function to run before all tests
beforeAll(async () => {
  // Instantiate memory server and get url to connect to in-memory server
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();
  // Get mongoose to connect to in-memory server
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

// Hook function to run before each test
beforeEach(async () => {
  // Resets data inbetween tests 
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

// Hook function to run after all tests are complete
afterAll(async () => {
  // Stops server and disconnects from mongoose
  await mongo.stop();
  await mongoose.connection.close();
});
