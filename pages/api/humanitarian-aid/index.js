import { connectToDatabase, insertDocument } from "../../../util/mongodb";

async function handler(req, res) {
  let client;
  try {
    client = await connectToDatabase().client;
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { category, title, amount, location, hours } = req.body;

    const newAid = {
      category,
      title,
      amount: parseFloat(amount),
      location,
      hours,
      taken: false,
      taken_by: "",
      chat_active: false,
    };

    try {
      await insertDocument("humanitarian-aid", newAid);
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Aid created!" });
  }
  client.close();
}

export default handler;
