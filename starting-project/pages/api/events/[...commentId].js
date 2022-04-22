import fs from "fs";
import build from "next/dist/build";
import path from "path";
import { MongoClient } from "mongodb";
import { connectDataBase, insertDocument } from "../../../helpers/db-util";
import { connect } from "http2";

export function buildPath() {
  return path.join(process.cwd(), "dummy-comments.json");
}

export function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

async function handler(req, res) {
  let client;

  try {
    client = await connectDataBase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to database failed" });
    return;
  }
  console.log("connected to database");

  if (req.method === "POST") {
    const eventId = req.query.commentId[0];

    const commentObject = {
      email: req.body.email,
      name: req.body.name,
      text: req.body.text,
      eventId,
    };

    let result;
    try {
      result = await insertDocument(client, "comments", {
        comment: commentObject,
      });
    } catch (error) {
      res.status(500).json({ message: "inserting data failed" });
      return;
    }

    commentObject._id = result.insertedId;


    res.status(201).json({ message: "heyyooo it worked!" });
  }
  if (req.method === "GET") {
    const db = client.db();
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    console.log(documents);

    res.status(200).json({ comments: documents });
  }

  client.close();
}

export default handler;
