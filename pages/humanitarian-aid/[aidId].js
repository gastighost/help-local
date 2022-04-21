import { findDocumentById } from "../../util/mongodb";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import EditDeleteButtons from "../../components/humanitarian-aid/edit-delete";
import AidEditForm from "../../components/humanitarian-aid/aid-edit-form";
import AidItemDetail from "../../components/humanitarian-aid/aid-item-detail";

function HumanitarianAidShowPage(props) {
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();
  const aidId = router.query.aidId;
  const { aid } = props;
  const selectedAid = aid[0];

  function turnOffEdit() {
    setIsEditing(false);
  }

  function turnOnEdit() {
    setIsEditing(true);
  }

  return (
    <div>
      <AidItemDetail itemDetails={selectedAid} />
      {isEditing && <AidEditForm handleEditOff={turnOffEdit} id={aidId} />}
      {!isEditing && <EditDeleteButtons id={aidId} handleEditOn={turnOnEdit} />}
      <Link href="/humanitarian-aid">Back to humanitarian items</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { aidId } = params;

  const aid = await findDocumentById("humanitarian-aid", aidId);

  return {
    props: {
      aid: JSON.parse(JSON.stringify(aid)),
    },
  };
}

export default HumanitarianAidShowPage;
