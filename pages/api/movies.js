import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const sales = await db
    .collection("sales")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(sales);
};
