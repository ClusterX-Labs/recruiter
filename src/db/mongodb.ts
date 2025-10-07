import 'dotenv/config';
import { MongoClient } from 'mongodb';

export const DB_NAME = 'recruiter';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required. Please set it in your .env file.');
}

const client = new MongoClient(process.env.DATABASE_URL);
const db = client.db(DB_NAME);

export { client, db };
export default client;
