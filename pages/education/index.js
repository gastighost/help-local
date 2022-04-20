import { Fragment } from "react";
import Link from "next/link";
import { getAllDocuments } from "../../util/mongodb";
import CategoryFilterBar from "../../components/ui/filter-bar";
import ItemsList from "../../components/ui/items-list";

<<<<<<< HEAD
=======
const DUMMY_EDUCATIONS = [
  {
    category: "Tutoring",
    title: "History",
    location: "Berlin",
    monthlySalary: 1500,
    language: "German",
    tutor: "Rosty",
    studentAge: "12",
    contact: "email...",
    _id: 1,
  },
  {
    category: "Tutoring",
    title: "Maths",
    location: "Berlin",
    monthlySalary: 2500,
    language: "English",
    tutor: "Gaston",
    contact: "email...",
    studentAge: "11",
    _id: 2,
  },
  {
    category: "Tutoring",
    title: "Biology",
    location: "Berlin",
    language: "German",
    tutor: "Tony",
    contact: "email...",
    studentAge: "16",
    _id: 3,
  },
];

>>>>>>> 79bdde0acfa3b96b5b8406aa51b8f14df52ba233
function EducationIndex(props) {
  const { education } = props
  return (
    <Fragment>
      <CategoryFilterBar />
      <h1>Education Listings</h1>
<<<<<<< HEAD
      <ItemsList info={education} />
=======
      <ItemsList info={DUMMY_EDUCATIONS} type="education" />
>>>>>>> 79bdde0acfa3b96b5b8406aa51b8f14df52ba233
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const education = await getAllDocuments("education");

<<<<<<< HEAD
  return {
    props: {
      education: JSON.parse(JSON.stringify(education)),
    },
    // props: {
    //   education: education.map(item => ({
    //     ...{item},
    //     id: item._id.toString()
    //   }))
    // },
  };
}

=======
>>>>>>> 79bdde0acfa3b96b5b8406aa51b8f14df52ba233
export default EducationIndex;
