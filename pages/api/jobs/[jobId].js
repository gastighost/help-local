import {
  connectToDatabase,
  findDocumentById,
  editDocumentById,
  deleteDocumentById,
  findUserByEmail
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

  // selecting current session client user
  const session = await getSession({ req });
  const { user } = session;
  const selectedUser = await findUserByEmail(user.email);

  if (req.method === "DELETE") {
    const jobId = req.body.jobId;
    const jobToDelete = await findDocumentById("jobs", jobId);
    const isEqual = ObjectId(selectedUser._id).toString() === jobToDelete[0].user_id.toString();

    let selectedResult;
    try {
      if (isEqual) {
        selectedResult = await deleteDocumentById("jobs", jobId);
      }
    } catch (error) {
      res.status(500).json({ message: "Deleting document failed!" });
      return;
    }
    res.status(201).json({ selectedResult });
  }

  if (req.method === "PATCH") {
    const isEqual = ObjectId(selectedUser._id).toString() === req.body.user_id.toString();

    const {
      jobId,
      category,
      title,
      location,
      monthlySalary,
      weeklyHours,
      requirements,
      language,
      description,
      company,
      user_id,
      isBookmarked,
      // provider
    } = req.body;

    const newJob = {
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
      user_id,
      isBookmarked,
    };

    try {
      if (isEqual) {
        await editDocumentById("jobs", jobId, newJob);
      }
    } catch (error) {
      res.status(500).json({ message: "Updating data failed!" });
      return;
    }

    res.status(201).json({ message: "Job updated!", job: newJob });
  }
}

export default handler;
