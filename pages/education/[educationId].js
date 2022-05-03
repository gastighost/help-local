import { findDocumentById } from "../../util/mongodb";
import Card from "../../components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "../../styles/Home.module.css";
import IndividualItem from "../../components/ui/individualItem";
import EducationItem from "../../components/education/EducationItem";
// import AidEditForm from "../../components/humanitarian-aid/aid-edit-form";
// import { collectAssets } from "next/dist/build/webpack/plugins/middleware-plugin";

function EducationShowPage(props) {
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();
  const educationId = router.query.educationId;
  // console.log(educationId);
  const { education } = props;
  const selectedEducation = education[0];

  function turnOffEdit() {
    setIsEditing(false);
  }

  function turnOnEdit() {
    setIsEditing(true);
  }

  return (
    <EducationItem selectedEducation={selectedEducation}/>
  );education
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
