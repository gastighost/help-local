import { connectToDatabase, insertDocument, editDocumentById } from "../../../util/mongodb";

async function handler(req, res) {
  let clientOpened;
  try {
    const { client } = await connectToDatabase();
    clientOpened = client;
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {

    const { category, title, location, language, contact, studentAge, tutor,  } = req.body;

    const newBookmark = {
      category,
      title,
      studentAge: parseFloat(studentAge),
      location,
      tutor,
      isBookmarked: false,
      taken: false,
      taken_by: "",
      language,
      contact,
      chat_active: false,
    };

    try {
      await insertDocument("bookmarks", newBookmark);
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Education item created!", education: newBookmark });
  }

  if (req.method === "PATCH") {
    const { id, isBookmarked } = req.body;

    const newBookmark = {

      isBookmarked

    };

    // console.log(id);
    let selectedResult;
    try {
      selectedResult = await editDocumentById("education", id, newBookmark);
    } catch (error) {
      res.status(500).json({ message: "Updating document failed!" });
      return;
    }
    res.status(201).json({ selectedResult, educationId: id });
  }

  clientOpened.close();
}

export default handler;
