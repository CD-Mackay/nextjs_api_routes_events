import fs from "fs";
import build from "next/dist/build";
import path from "path";
import { MongoClient } from 'mongodb';

export function buildPath() {
  return path.join(process.cwd(), "dummy-comments.json");
}

export function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

async function handler(req, res) {


  const client = await MongoClient.connect(
    "mongodb+srv://Connor:Shawt0graph@authcluster.jdoeb.mongodb.net/events?retryWrites=true&w=majority"
  );
    console.log("connected to database");

  if (req.method === 'POST') {
    const eventId = req.query.commentId[0];

    const commentObject = {
      email: req.body.email,
      name: req.body.name,
      text: req.body.text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection('comments').insertOne({ comment: commentObject });
    console.log(result);
    const filePath = buildPath();
    const commentList = extractData(filePath);
    commentList.push(commentObject);

     fs.writeFileSync(filePath, JSON.stringify(commentList));

    res.status(201).json({ message: "heyyooo it worked!"});
    
  } else if (req.method === "GET") {
    const filePath = buildPath();

    const comments = fs.readFileSync(filePath);
    res.json({ message: "Why are you here? This is an API route", comments: JSON.parse(comments) });
  }

  client.close();
};

export default handler;