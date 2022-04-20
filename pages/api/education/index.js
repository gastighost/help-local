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

    const { category, title, tutor, location, language, contact, studentAge } = req.body;

    const newEducation = {
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
      await insertDocument("education", newEducation);
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Education item created!", education: newEducation });
  }

  if (req.method === "PATCH") {
    const { category, title, tutor, location, language, contact, studentAge, id, isBookmarked } = req.body;

    const newEducation = {
      category,
      title,
      studentAge: parseFloat(studentAge),
      location,
      tutor,
      isBookmarked,
      taken: false,
      taken_by: "",
      language,
      contact,
      chat_active: false,
    };

    console.log(id);
    let selectedResult;
    try {
      selectedResult = await editDocumentById("education", id, newEducation);
    } catch (error) {
      res.status(500).json({ message: "Updating document failed!" });
      return;
    }
    res.status(201).json({ selectedResult, educationId: id });
  }

  clientOpened.close();
}

export default handler;
