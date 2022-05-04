import { connectToDatabase, insertDocument, editDocumentById, findDocumentById, findUserByEmail } from "../../../util/mongodb";
import { getSession } from "next-auth/client";
import { ObjectId } from "mongodb";

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

    const { category, title, tutor, location, language, contact, studentAge,  } = req.body;

    const session = await getSession({ req });
    const { user } = session;
    const selectedUser = await findUserByEmail(user.email);

    // const providerBoolean = provider === "true" ? true : false;

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
      user_id: selectedUser._id,
      // providing: providerBoolean,
    };

    try {
      await insertDocument("education", newEducation);
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Education item created!", education: newEducation });
  }

  // if (req.method === "PATCH" && req.body.isBookmarked) {
  //   const { id, isBookmarked } = req.body;
  //   console.log("first method", id);
  //   const newEducation = {

  //     isBookmarked: true

  //   };

  //   // console.log(id);
  //   let selectedResult;
  //   try {
  //     selectedResult = await editDocumentById("education", id, newEducation);
  //   } catch (error) {
  //     res.status(500).json({ message: "Updating document failed!" });
  //     return;
  //   }
  //   res.status(201).json({ selectedResult, educationId: id });
  // }

  // if (req.method === "PATCH" && !req.body.isBookmarked) {
  //   const { id, isBookmarked } = req.body;
  //   console.log("second-method", id);
  //   const newEducation = {

  //     isBookmarked: false

  //   };

  //   // console.log(id);
  //   let selectedResult;
  //   try {
  //     selectedResult = await editDocumentById("education", id, newEducation);
  //   } catch (error) {
  //     res.status(500).json({ message: "Updating document failed!" });
  //     return;
  //   }
  //   res.status(201).json({ selectedResult, educationId: id });
  // }


  clientOpened.close();
}

export default handler;
