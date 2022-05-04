import { findDocumentById, findUserByEmail} from "../../util/mongodb";
import { getSession } from "next-auth/client";
import { useState } from "react";
import { useRouter } from "next/router";
import IndividualItem from "../../components/ui/individualItem";
import Button from "../../components/ui/button";
import { Fragment } from "react";
import EducationEditForm from "../../components/education/EducationEditForm";
import Link from "next/link";


function EducationShowPage(props) {
  const [educationEditModalisOpen, setEducationEditModalisOpen] = useState(false)

  const router = useRouter();
  const educationId = router.query.educationId;
  console.log(educationId);
  const { education, selectedUser } = props;
  const selectedEducation = education[0];

  const creatorId = selectedEducation.user_id;


  const isEqual = selectedUser._id === education[0].user_id;


  function turnOffEdit() {
    setEducationEditModalisOpen(false);
  }

  function turnOnEdit() {
    setEducationEditModalisOpen(true);
  }

  function deleteHandler(event) {
    event.preventDefault();

    fetch("/api/education/" + educationId, {
      method: "DELETE",
      body: JSON.stringify({
        educationId: educationId,
        creatorId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        router.push("/education");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Fragment>
      <IndividualItem selectedEducation={selectedEducation}/>
      {isEqual && (
        <div>
          <Button onClick={turnOnEdit}>Edit</Button>
          <Button onClick={deleteHandler}>Delete</Button>
        </div>
      )}
      {educationEditModalisOpen && isEqual && (
        <EducationEditForm
          onCancel={turnOffEdit}
          id={educationId}
          creatorId={creatorId}/>
      )}
      {/* {isEditing && isEqual && (
        <Button
          handleEditOff={turnOffEdit}
          id={educationId}
          creatorId={creatorId}
        />
      )} */}
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { educationId } = params;

  const education = await findDocumentById("education", educationId);

  const session = await getSession(context);
  const user = await findUserByEmail(session.user.email);

  return {
    props: {
      education: JSON.parse(JSON.stringify(education)),
      selectedUser: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default EducationShowPage;
