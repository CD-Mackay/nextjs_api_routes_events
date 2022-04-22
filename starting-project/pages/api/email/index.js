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

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const filePath = buildPath();
    const emailList = extractData(filePath);
    emailList.push({
      id: new Date().toISOString(),
      email,
    });

  const client = await MongoClient.connect(
      "mongodb+srv://Connor:Shawt0graph@authcluster.jdoeb.mongodb.net/events?retryWrites=true&w=majority"
    );
      console.log("connected to database");
      const db = client.db()
      await db.collection('emailList').insertOne({ email, })

      client.close();

    console.log(email);

    return res.status(201).json({ message: "heyyooo it worked!", email });
  }
  // else if (req.method === "GET") {
  //   res.json({ message: "Why are you here? This is an API route" });
  // }
}

export default handler;
