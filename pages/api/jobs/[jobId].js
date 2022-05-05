import {
  connectToDatabase,
  editDocumentById,
  // findUserByEmail
} from "../../../util/mongodb";
//  import { getSession } from "next-auth/client";

async function handler(req, res) {
  let clientOpened;
  try {
    const { client } = await connectToDatabase();
    clientOpened = client;
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "PATCH") {
    // getting current user
    // const session = await getSession({ req });
    // const { user } = session;
    // const selectedUser = await findUserByEmail(user.email);

    const {
      id,
      category,
      title,
      location,
      monthlySalary,
      weeklyHours,
      requirements,
      language,
      description,
      company,
      // provider
    } = req.body;

    const newJob = {
      id: id,
      category,
      title,
      location,
      monthlySalary: parseFloat(monthlySalary),
      weeklyHours: parseFloat(weeklyHours),
      requirements,
      language,
      description,
      company,
      // providing: provider === "true" ? true : false,
      // user_id: selectedUser._id
    };

    try {
      await editDocumentById("jobs", id, newJob);
    } catch (error) {
      res.status(500).json({ message: "Updating data failed!" });
      return;
    }

    res.status(201).json({ message: "Job updated!", job: newJob });
  }
}

export default handler;
