require('ts-node').register();
import path from 'path';
import { Seeder } from 'mongo-seeding';

const pathToData = path.resolve('src/seeding/data');

const seederConfig = {
  database: process.env.MONGO_URI,
  dropDatabase: true,
};

const collectionReadingOptions = {
  extensions: ['js', 'json', 'ts'],
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
};

async function seed(): Promise<void> {
  console.log('Seeding films database...');

  const seeder = new Seeder(seederConfig);
  const collections = seeder.readCollectionsFromPath(
    pathToData,
    collectionReadingOptions
  );

  try {
    await seeder.import(collections);
  } catch (err) {
    console.error('Problem seeding films database...');
    console.error(err);
    process.exit(1);
  }

  console.log('Finished seeding films database...');
}

seed();
