import { MongoClient } from "mongodb";
import { connectToDatabase, insertDocument } from "../../../util/mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const newAid = req.body.aid;

    let client;
    try {
      client = await connectToDatabase().client;
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }
    try {
      await insertDocument(client, "emails", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
