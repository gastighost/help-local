import { getAllDocuments } from "../../util/mongodb";
import { getSession } from "next-auth/client";
import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import CategoryFilterBar from "../../components/ui/filter-bar";
import AidItemList from "../../components/humanitarian-aid/aid-item-list";
import HumanitarianAidForm from "../../components/humanitarian-aid/humanitarian-aid-form";
import Button from "../../components/ui/button";

function HumanitarianAidIndex(props) {
  const [newAidModalIsOpen, setNewAidModalIsOpen] = useState(false);
  const { aid, session } = props;

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
        {session && <Button onClick={openModal}>Create New Aid</Button>}
      </div>
      {newAidModalIsOpen && <HumanitarianAidForm onCancel={closeModal} />}
      <h1>Humanitarian Aid</h1>
      <AidItemList info={aid} type="humanitarian-aid" />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const aid = await getAllDocuments("humanitarian-aid");

  const session = await getSession(context);

  return {
    props: {
      aid: JSON.parse(JSON.stringify(aid)),
      session,
    },
  };
}

export default HumanitarianAidIndex;
