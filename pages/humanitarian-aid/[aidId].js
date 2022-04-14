import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../util/mongodb";

import Link from "next/link";

function HumanitarianAidShowPage(props) {
  const { sale } = props;
  const selectedSale = sale[0];
  console.log(selectedSale);
  return (
    <div>
      <h1>Humanitarian Show Page!</h1>
      <h2>Category: {selectedSale.purchaseMethod}</h2>
      <h3>Title: {selectedSale.items[0].name}</h3>
      <p>Amount: {selectedSale.items.length}</p>
      <p>Drop off location: {selectedSale.storeLocation}</p>
      <p>Hours: {selectedSale.customer.satisfaction}</p>
      <Link href="/humanitarian-aid">Back to humanitarian page</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const { aidId } = params;

  const { db } = await connectToDatabase();

  const sale = await db
    .collection("sales")
    .find({ _id: ObjectId(aidId) })
    .toArray();

  return {
    props: {
      sale: JSON.parse(JSON.stringify(sale)),
    },
  };
}

export default HumanitarianAidShowPage;
