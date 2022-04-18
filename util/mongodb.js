import { MongoClient, ObjectId } from "mongodb";

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;

let cachedClient = null;
let cachedDb = null;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function insertDocument(collection, document) {
  const { db } = await connectToDatabase();
  const result = db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(collection) {
  const { db } = await connectToDatabase();
  const documents = await db.collection(collection).find({}).toArray();
  return documents;
}

export async function findDocumentById(collection, id) {
  const { db } = await connectToDatabase();
  const document = await db
    .collection(collection)
    .find({ _id: ObjectId(id) })
    .toArray();
  return document;
}
