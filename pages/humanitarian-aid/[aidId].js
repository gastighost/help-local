import { findDocumentById, findUserByEmail } from "../../util/mongodb";

import { useState } from "react";
import { getSession } from "next-auth/client";
import Link from "next/link";
import { useRouter } from "next/router";
import EditDeleteButtons from "../../components/humanitarian-aid/edit-delete";
import AidEditForm from "../../components/humanitarian-aid/aid-edit-form";
import AidItemDetail from "../../components/humanitarian-aid/aid-item-detail";
import RequestButton from "../../components/ui/request-button";

function HumanitarianAidShowPage(props) {
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();
  const aidId = router.query.aidId;
  const { aid, selectedUser } = props;
  const selectedAid = aid[0];

  const creatorId = selectedAid.user_id;

  const isEqual = selectedUser._id === aid[0].user_id;

  function turnOffEdit() {
    setIsEditing(false);
  }

  function turnOnEdit() {
    setIsEditing(true);
  }

  return (
    <div>
      <AidItemDetail itemDetails={selectedAid} />
      {isEqual && (
        <RequestButton aidItem={selectedAid} id={aidId} creatorId={creatorId} />
      )}
      {isEditing && isEqual && (
        <AidEditForm
          handleEditOff={turnOffEdit}
          id={aidId}
          creatorId={creatorId}
        />
      )}
      {!isEditing && isEqual && (
        <EditDeleteButtons
          id={aidId}
          handleEditOn={turnOnEdit}
          creatorId={creatorId}
        />
      )}
      <Link href="/humanitarian-aid">Back to humanitarian items</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { aidId } = params;

  const aid = await findDocumentById("humanitarian-aid", aidId);

  const session = await getSession(context);
  const user = await findUserByEmail(session.user.email);

  return {
    props: {
      aid: JSON.parse(JSON.stringify(aid)),
      selectedUser: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default HumanitarianAidShowPage;
