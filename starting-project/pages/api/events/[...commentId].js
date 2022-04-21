import fs from "fs";
import path from "path";

export function buildPath() {
  return path.join(process.cwd(), "dummy-comments.json");
}

export function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {

  if (req.method === 'POST') {
    console.log(req.body);
    console.log(req.query);
    const eventId = req.query.commentId[0];
    const commentId = req.query.commentId[1];

    const commentObject = {
      email: req.body.email,
      name: req.body.name,
      text: req.body.text,
      eventId,
      commentId
    };
    const filePath = buildPath();
    const commentList = extractData(filePath);
    commentList.push(commentObject);

     fs.writeFileSync(filePath, JSON.stringify(commentList));

    res.status(201).json({ message: "heyyooo it worked!"});
    
  } else if (req.method === "GET") {
    res.json({ message: "Why are you here? This is an API route" });
  }
};

export default handler;