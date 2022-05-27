import { getAllDocuments } from "../../util/mongodb";
import { getSession } from "next-auth/client";
import { useState } from "react";
import Link from "next/link";
import AidItemList from "../../components/humanitarian-aid/aid-item-list";
import HumanitarianAidForm from "../../components/humanitarian-aid/humanitarian-aid-form";
import Button from "../../components/ui/button";
import { Fragment } from "react";
import HumanitarianListInfo from "../../components/humanitarian-aid/humanitarian-list-info";

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
    <Fragment>
      <HumanitarianListInfo
        openModal={openModal}
        newAidModalIsOpen={newAidModalIsOpen}
        closeModal={closeModal}
        session={session}
      />
      {/* <div>
        {session && <Button onClick={openModal}>Create New Aid</Button>}
      </div> */}
      {newAidModalIsOpen && <HumanitarianAidForm onCancel={closeModal} />}
      <h1>Humanitarian Aid</h1>
      <AidItemList info={aid} type="humanitarian-aid" />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Fragment>
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
