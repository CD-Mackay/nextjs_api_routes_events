import fs from "fs";
import path from "path";

export function buildPath() {
  return path.join(process.cwd(), "dummy-emails.json");
}

export function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export default function handler(req, res) {
  if (req.method === "POST ") {
    const email = req.body.email;
    const filePath = buildPath();
    const emailList = extractData(filePath);
    emailList.push({
      id: new Date(),
      email,
    });

    fs.writeFileSync(filePath, JSON.stringify(emailList));

    res.status(201).json({ message: "heyyooo it worked!", email: emailList });
  } else if (req.method === "GET") {
    res.json({ message: "Why are you here? This is an API route" });
  }
}
