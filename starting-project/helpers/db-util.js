import { MongoClient } from 'mongodb';

export async function connectDataBase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Connor:Shawt0graph@authcluster.jdoeb.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export async function getAllDocument(client, collection) {
  const client = client.db();

  const documents = await db
  .collection(collection)
  .find()
  .sort({ _id: -1})
  .toArray();

  return documents;
}