import { findDocumentById } from "../../util/mongodb";

import Link from "next/link";
import { useRouter } from "next/router";
import EditDeleteButtons from "../../components/humanitarian-aid/edit-delete";

function HumanitarianAidShowPage(props) {
  const router = useRouter();
  const aidId = router.query.aidId;
  const { aid } = props;
  const selectedAid = aid[0];
  return (
    <div>
      <h1>Humanitarian Show Page!</h1>
      <h2>Category: {selectedAid.category}</h2>
      <h3>Title: {selectedAid.title}</h3>
      <p>Amount: {selectedAid.amount}</p>
      <p>Drop off location: {selectedAid.location}</p>
      <p>Hours: {selectedAid.hours}</p>
      <p>Taken?{selectedAid.taken}</p>
      <p>Taken by: {selectedAid.taken_by}</p>
      <p>Chat active? {selectedAid.chat_active}</p>
      <EditDeleteButtons id={aidId} />
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
