import {
  connectToDatabase,
  deleteDocumentById,
  editDocumentById,
  findUserByEmail,
} from "../../../util/mongodb";

import { ObjectId } from "mongodb";

import { getSession } from "next-auth/client";

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
    const { creatorId } = req.body;

    const session = await getSession({ req });
    const { user } = session;
    const selectedUser = await findUserByEmail(user.email);

    const isEqual =
      ObjectId(creatorId).toString() === selectedUser._id.toString();

    let selectedResult;
    try {
      if (isEqual) {
        selectedResult = await deleteDocumentById("education", EducationId);
      }
    } catch (error) {
      res.status(500).json({ message: "Deleting document failed!" });
      return;
    }
    res.status(201).json({ selectedResult });
  }

  if (req.method === "PATCH" && req.body.requestPresence) {
    const { id, creatorId, request } = req.body;

    const session = await getSession({ req });
    const { user } = session;
    const selectedUser = await findUserByEmail(user.email);

    const isEqual =
      ObjectId(creatorId).toString() === selectedUser._id.toString();

    const newEducation = {
      taken: request,
    };
    let selectedResult;
    try {
      if (isEqual) {
        selectedResult = await editDocumentById("education", id, newEducation);
      }
    } catch (error) {
      res.status(500).json({ message: "Requesting document failed!" });
      return;
    }
    res.status(201).json({ selectedResult, EducationId: id });
  }

  if (req.method === "PATCH" && !req.body.requestPresence) {
    const {
      category,
      title,
      amount,
      location,
      hours,
      id,
      creatorId,
      // provider,
    } = req.body;

    // const providerBoolean = provider === "true" ? true : false;

    const session = await getSession({ req });
    const { user } = session;
    const selectedUser = await findUserByEmail(user.email);

    const isEqual =
      ObjectId(creatorId).toString() === selectedUser._id.toString();

    const newEducation = {
      category,
      title,
      amount: parseFloat(amount),
      location,
      hours,
      // providing: providerBoolean,
    };
    let selectedResult;
    try {
      if (isEqual) {
        selectedResult = await editDocumentById("education", id, newEducation);
      }
    } catch (error) {
      res.status(500).json({ message: "Updating document failed!" });
      return;
    }
    res.status(201).json({ selectedResult, EducationId: id });
  }
}

export default handler;
