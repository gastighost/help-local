import { Fragment } from "react";
import Link from "next/link";
// import { connectToDatabase } from "../../util/mongodb";
import EducationList from "../../components/education/EducationList";
import CategoryFilterBar from "../../components/ui/filter-bar";
import ItemsList from "../../components/ui/items-list";

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

function EducationIndex(props) {
  const { sales } = props;
  return (
    <Fragment>
      <CategoryFilterBar />
      <h1>Education Listings</h1>
      <ItemsList info={DUMMY_EDUCATIONS} type="education" />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const { db } = await connectToDatabase();

//   const sales = await db
//     .collection("sales")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();

//   return {
//     props: {
//       sales: JSON.parse(JSON.stringify(sales)),
//     },
//   };
// }

export default EducationIndex;
