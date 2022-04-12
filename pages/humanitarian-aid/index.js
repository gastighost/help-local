import { connectToDatabase } from "../../util/mongodb";
import { Fragment } from "react";
import Link from "next/link";

function HumanitarianAidIndex(props) {
  const { sales } = props;
  console.log(sales);
  return (
    <Fragment>
      <h1>Humanitarian Aid</h1>
      <ul>
        {sales.map((sale) => {
          return (
            <li>
              <h2>Category: {sale.purchaseMethod}</h2>
              <h3>Title: {sale.items[0].name}</h3>
              <p>Amount: {sale.items.length}</p>
              <p>Drop off location: {sale.storeLocation}</p>
              <p>Hours: {sale.customer.satisfaction}</p>
            </li>
          );
        })}
      </ul>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const sales = await db
    .collection("sales")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      sales: JSON.parse(JSON.stringify(sales)),
    },
  };
}

export default HumanitarianAidIndex;
