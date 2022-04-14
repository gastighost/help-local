import { connectToDatabase } from "../../util/mongodb";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import HumanitarianAidList from "../../components/humanitarian-aid/humanitarian-aid-list";
import CategoryFilterBar from "../../components/ui/filter-bar";

function HumanitarianAidIndex(props) {
  const { sales } = props;
  console.log(sales);
  return (
    <div className={styles.center}>
      <CategoryFilterBar />
      <h1>Humanitarian Aid</h1>
      <HumanitarianAidList info={sales} />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
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
