import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../util/mongodb";

import Link from "next/link";

function HumanitarianAidShowPage(props) {
  const { aid } = props;
  const selectedAid = aid[0];
  console.log(selectedAid);
  return (
    <div>
      <h1>Humanitarian Show Page!</h1>
      <h2>Category: {selectedAid.category}</h2>
      <h3>Title: {selectedAid.title}</h3>
      <p>Amount: {selectedAid.amount.$numberDecimal}</p>
      <p>Drop off location: {selectedAid.location}</p>
      <p>Hours: {selectedAid.hours}</p>
      <p>Taken?{selectedAid.taken}</p>
      <p>Taken by: {selectedAid.taken_by}</p>
      <p>Chat active? {selectedAid.chat_active}</p>
      <Link href="/humanitarian-aid">Back to humanitarian page</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const { aidId } = params;

  const { db } = await connectToDatabase();

  const aid = await db
    .collection("humanitarian-aid")
    .find({ _id: ObjectId(aidId) })
    .toArray();

  return {
    props: {
      aid: JSON.parse(JSON.stringify(aid)),
    },
  };
}

export default HumanitarianAidShowPage;
