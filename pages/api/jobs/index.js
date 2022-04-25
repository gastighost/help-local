import {
  connectToDatabase,
  insertDocument,
  findUserByEmail
 } from "../../../util/mongodb";
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

   if (req.method === "POST") {
    // getting current user
    const session = await getSession({ req });
    const { user } = session;
    const selectedUser = await findUserByEmail(user.email);

    const {
      category,
      title,
      location,
      monthlySalary,
      weeklyHours,
      requirements,
      language,
      description,
      company,
      provider
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
      providing: provider === "true" ? true : false,
      user_id: selectedUser._id
    }

    try {
      await insertDocument("job", newJob);
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Job created!", job: newJob })
   }
   clientOpened.close();
 }

 export default handler;
