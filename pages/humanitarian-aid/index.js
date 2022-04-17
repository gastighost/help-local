import { getAllDocuments } from "../../util/mongodb";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import HumanitarianAidList from "../../components/humanitarian-aid/humanitarian-aid-list";
import CategoryFilterBar from "../../components/ui/filter-bar";

function HumanitarianAidIndex(props) {
  const { aid } = props;
  return (
    <div className={styles.center}>
      <CategoryFilterBar />
      <h1>Humanitarian Aid</h1>
      <Link href="/humanitarian-aid/new-aid">
        <a>Create new item</a>
      </Link>
      <HumanitarianAidList info={aid} />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const aid = await getAllDocuments("humanitarian-aid");

  return {
    props: {
      aid: JSON.parse(JSON.stringify(aid)),
    },
  };
}

export default HumanitarianAidIndex;
