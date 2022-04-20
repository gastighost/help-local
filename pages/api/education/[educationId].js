import {
  connectToDatabase,
  deleteDocumentById,
  editDocumentById,
} from "../../../util/mongodb";

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
    const EducationId = req.body.EducationId;
    let selectedResult;
    try {
      selectedResult = await deleteDocumentById("humanitarian-aid", EducationId);
    } catch (error) {
      res.status(500).json({ message: "Deleting document failed!" });
      return;
    }
    res.status(201).json({ selectedResult });
  }

  if (req.method === "PATCH") {
    const { id, isBookmarked } = req.body;

    const newEducation = {

      isBookmarked,

    };
    let selectedResult;
    try {
      selectedResult = await editDocumentById("education", id, newEducation);
    } catch (error) {
      res.status(500).json({ message: "Updating document failed!" });
      return;
    }
    res.status(201).json({ selectedResult, EducationId: id });
  }
}

export default handler;
