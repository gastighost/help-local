import { Fragment } from "react";
import Link from "next/link";
import JobsList from "../../components/jobs/jobs-list";

// Generating dummy data for jobs
// to be deleted once database is set up
const jobCategories = ["Minijob", "Part-time", "Full-time"];
const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

const sampleJobs = [
  {
    category: randomElement(jobCategories),
    title: "Warehouse worker",
    location: "Berlin",
    monthlySalary: 1500,
    weeklyHours: 35,
    requirements: "physically fit, being able to do shift-time work",
    language: "German",
    description: "Sorting, moving and other physical work at a supermarket warehouse",
    company: "REWE",
    key: 1
  },
  {
    category: randomElement(jobCategories),
    title: "Web Developer",
    location: "Berlin",
    monthlySalary: 2500,
    weeklyHours: 35,
    requirements: "Experience with Ruby on Rails, React or similar web dev frameworks",
    language: "English",
    description: "Setting up a new website with a startup",
    company: "Le Brother",
    key: 2
  },
  {
    category: randomElement(jobCategories),
    title: "Cashier",
    location: "Berlin",
    monthlySalary: 1400,
    weeklyHours: 20,
    requirements: "quick reactions, pragmatic, ability to work weekends",
    language: "German",
    description: "Cashier work at a supermarket",
    company: "Edeka",
    key: 3
  }
]

function JobsIndex() {
  return (
    <div>
      <h1>Jobs Index</h1>
      <JobsList jobs={sampleJobs} />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export default JobsIndex;
