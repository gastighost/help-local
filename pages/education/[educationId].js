import { findDocumentById } from "../../util/mongodb";
import Card from "../../components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "../../styles/Home.module.css";
// import AidEditForm from "../../components/humanitarian-aid/aid-edit-form";
// import { collectAssets } from "next/dist/build/webpack/plugins/middleware-plugin";

function EducationShowPage(props) {
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();
  const aidId = router.query.educationId;
  const { education } = props;
  const selectedEducation = education[0];

  function turnOffEdit() {
    setIsEditing(false);
  }

  function turnOnEdit() {
    setIsEditing(true);
  }

  return (
    <Card>
      <div className={classes.content}>
        <h1>Humanitarian Show Page!</h1>
        <h2>Category: {selectedEducation.category}</h2>
        <h3>Title: {selectedEducation.title}</h3>
        <p>Amount: {selectedEducation.studentAge}</p>
        <p>Drop off location: {selectedEducation.location}</p>
        <p>Hours: {selectedEducation.tutor}</p>
        <p>Chat active? {selectedEducation.language}</p>
      </div>
      <div className={classes.actions}>
        <button>Delete
        </button>
        <button >
        <Link href="/education">Back</Link>
        </button>
        </div>
      {/* {isEditing && <AidEditForm handleEditOff={turnOffEdit} id={educationId} />}
      {!isEditing && <EditDeleteButtons id={educationId} handleEditOn={turnOnEdit} />} */}
      <Link href="/education">Back to Education page</Link>
    </Card>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { educationId } = params;

  const education = await findDocumentById("education", educationId);

  return {
    props: {
      education: JSON.parse(JSON.stringify(education)),
    },
  };
}

export default EducationShowPage;
