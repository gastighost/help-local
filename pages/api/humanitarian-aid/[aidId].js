import { connectToDatabase, deleteDocumentById } from "../../../util/mongodb";

async function handler(req, res) {
  let clientOpened;
  try {
    const { client } = await connectToDatabase();
    clientOpened = client;
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "DELETE") {
    const aidId = req.body.aidId;
    let selectedResult;
    try {
      selectedResult = await deleteDocumentById("humanitarian-aid", aidId);
    } catch (error) {
      res.status(500).json({ message: "Deleting document failed!" });
      return;
    }
    res.status(201).json({ selectedResult });
  }
}

export default handler;
