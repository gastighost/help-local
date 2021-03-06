import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;

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
  const client = await clientPromise;
  const db = await client.db(dbName);
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

export async function getBookmarkedDocuments(collection) {
  const { db } = await connectToDatabase();
  const documents = await db
    .collection(collection)
    .find({ isBookmarked: true })
    .toArray();
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

export async function deleteDocumentById(collection, id) {
  const { db } = await connectToDatabase();
  return await db.collection(collection).deleteOne({ _id: ObjectId(id) });
}

export async function editDocumentById(collection, id, updatedItem) {
  const { db } = await connectToDatabase();
  return await db
    .collection(collection)
    .updateOne({ _id: ObjectId(id) }, { $set: updatedItem });
}

export async function getBookmarkedItemById(id) {
  const { db } = await connectToDatabase();
  const document = await db
    .collection("education")
    .find({ _id: ObjectId(id) })
    .toArray();
  return document[0];
}

export async function findUserByEmail(selectedEmail) {
  const { db } = await connectToDatabase();
  return await db.collection("users").findOne({ email: selectedEmail });
}
