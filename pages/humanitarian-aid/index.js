import { getAllDocuments } from "../../util/mongodb";
import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import CategoryFilterBar from "../../components/ui/filter-bar";
import ItemsList from "../../components/ui/ItemsList";
import HumanitarianAidForm from "../../components/humanitarian-aid/humanitarian-aid-form";
import Button from "../../components/ui/button";

function HumanitarianAidIndex(props) {
  const [newAidModalIsOpen, setNewAidModalIsOpen] = useState(false);
  const { aid } = props;

  const openModal = () => {
    setNewAidModalIsOpen(true);
  };

  const closeModal = () => {
    setNewAidModalIsOpen(false);
  };

  return (
    <div className={styles.center}>
      <CategoryFilterBar />
      <div>
        <Button onClick={openModal}>Create New Aid</Button>
      </div>
      {newAidModalIsOpen && <HumanitarianAidForm onCancel={closeModal} />}
      <h1>Humanitarian Aid</h1>
      <ItemsList info={aid} type="humanitarian-aid" />
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
