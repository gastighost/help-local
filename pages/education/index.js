import { Fragment, useState, useContext } from "react";
import Link from "next/link";
import { getAllDocuments } from "../../util/mongodb";
import CategoryFilterBar from "../../components/ui/filter-bar";
import ItemsList from "../../components/ui/ItemsList";
import EducationList from "../../components/education/EducationList.js";
import NewEducationForm from "../../components/education/NewEducationForm";
import Button from "../../components/ui/button";
import ListInfo from "../../components/ui/ListInfo";
import { FilterContextProvider } from "../../store/FilterContext";

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
      <FilterContextProvider>
      <ListInfo
        openModal={openModal}
        newEducationModalIsOpen={newEducationModalIsOpen}
        closeModal={closeModal}/>
      {/* <CategoryFilterBar /> */}
      <ItemsList info={education} type="education" />
      <Button href="/">
        <a>Back to home</a>
      </Button>
      </FilterContextProvider>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const education = await getAllDocuments("education");
  return {
    props: {
      education: JSON.parse(JSON.stringify(education)),
    },
  };
}

export default EducationIndex;
