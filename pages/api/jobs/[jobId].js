import {
  connectToDatabase,
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

  if (req.method === "DELETE") {
    const jobId = req.body.jobId;
    // const { creatorId } = req.body;

    // const session = await getSession({ req });
    // const { user } = session;
    // const selectedUser = await findUserByEmail(user.email);

    // const isEqual =
    //   ObjectId(creatorId).toString() === selectedUser._id.toString();

    let selectedResult;
    try {
      // if (isEqual) {
      //   selectedResult = await deleteDocumentById("jobs", id);
      // }
      selectedResult = await deleteDocumentById("jobs", jobId);
    } catch (error) {
      res.status(500).json({ message: "Deleting document failed!" });
      return;
    }
    res.status(201).json({ selectedResult });
  }

  if (req.method === "PATCH") {
    // getting current user
    const session = await getSession({ req });
    const { user } = session;
    const selectedUser = await findUserByEmail(user.email);
    console.log("edited job from form", req.body);
    // const isEqual = ObjectId(selectedUser._id).toString() === req.body.user_id.toString();
    // console.log("selecteduser", ObjectId(selectedUser._id));
    // console.log("item owner", req.body);
    // console.log("user legit?", isEqual);

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
      await editDocumentById("jobs", jobId, newJob);
      console.log("updated job", newJob);
    } catch (error) {
      res.status(500).json({ message: "Updating data failed!" });
      return;
    }

    res.status(201).json({ message: "Job updated!", job: newJob });
  }
}

export default handler;
