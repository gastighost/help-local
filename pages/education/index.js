import { Fragment } from "react";
import Link from "next/link";
import { getAllDocuments } from "../../util/mongodb";
import CategoryFilterBar from "../../components/ui/filter-bar";
import ItemsList from "../../components/ui/ItemsList";
import EducationList from "../../components/education/EducationList.js";

function EducationIndex(props) {
  const { education } = props;
  return (
    <Fragment>
      <CategoryFilterBar />
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
