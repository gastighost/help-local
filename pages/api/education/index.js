import { connectToDatabase, insertDocument } from "../../../util/mongodb";

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
  clientOpened.close();
}

export default handler;
