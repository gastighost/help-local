import { Fragment, useState } from "react";
import Link from "next/link";
import { getAllDocuments } from "../../util/mongodb";
import CategoryFilterBar from "../../components/ui/filter-bar";
import ItemsList from "../../components/ui/ItemsList";
import EducationList from "../../components/education/EducationList.js";
import NewEducationForm from "../../components/education/NewEducationForm";
import Button from "../../components/ui/button";

function EducationIndex(props) {
  const [newEducationModalIsOpen, setNewEducationModalIsOpen] = useState(false)
  const { education } = props;
  // console.log(newEducationModalIsOpen);

  const openModal = () => {
    setNewEducationModalIsOpen(true)
  }

  const closeModal = () => {
    setNewEducationModalIsOpen(false)
  }

  return (
    <Fragment>
      <CategoryFilterBar />
      <div>
      <Button onClick={openModal}>Add New</Button>
      </div>
      {newEducationModalIsOpen && <NewEducationForm onCancel={closeModal}/>}
      <h1>Education Listings</h1>
      <EducationList info={education} type="education" />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const education = await getAllDocuments("education");
  // console.log(education);

  return {
    props: {
      education: JSON.parse(JSON.stringify(education)),
    },
  };
}

export default EducationIndex;
