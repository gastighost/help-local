import { Fragment } from "react";
import Link from "next/link";
import { connectToDatabase } from "../../util/mongodb";
import EducationList from "../../components/education/EducationList";
import CategoryFilterBar from "../../components/ui/filter-bar";

function EducationIndex(props) {
  const { sales } = props;
  return (
    <Fragment>
      <CategoryFilterBar />
      <h1>Education Listings</h1>
      <EducationList info={sales} />
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


export default EducationIndex;
