import {
  connectToDatabase,
  insertDocument,
  findUserByEmail,
} from "../../../util/mongodb";
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
    const { category, title, amount, measurement, location, hours, provider } =
      req.body;

    const session = await getSession({ req });
    const { user } = session;
    const selectedUser = await findUserByEmail(user.email);

    const providerBoolean = provider === "true" ? true : false;

    const newAid = {
      category,
      title,
      amount: parseFloat(amount),
      measurement,
      location,
      hours,
      providing: providerBoolean,
      taken: false,
      chat_active: false,
      isBookmarked: false,
      user_id: selectedUser._id,
    };

    try {
      await insertDocument("humanitarian-aid", newAid);
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Aid created!", aid: newAid });
  }
}

export default handler;
