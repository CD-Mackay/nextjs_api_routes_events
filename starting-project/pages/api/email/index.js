import fs from "fs";
import path from "path";
import { MongoClient } from "mongodb";

export function buildPath() {
  return path.join(process.cwd(), "dummy-emails.json");
}

export function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

async function connectDataBase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Connor:Shawt0graph@authcluster.jdoeb.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

async function insertDocument(client, document) {
  const db = client.db();
  await db.collection("emailList").insertOne(document);
}

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "invalid email" });
    }

    let client;

    try {
      client = await connectDataBase();
    } catch (error) {
      res.status(500).json({ message: "connecting to database failed" });
      return;
    }

    try {
      await insertDocument(client, { email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting Data Failed" });
      return;
    }

    console.log("connected to database");

    return res.status(201).json({ message: "heyyooo it worked!", email });
  }
  else if (req.method === "GET") {
    res.json({ message: "Why are you here? This is an API route" });
  }
}

export default handler;
