import { Fragment } from "react";
import Link from "next/link";
import JobsList from "../../components/jobs/jobs-list";
// import ItemsList from "../../components/ui/ItemsList";
import { getAllDocuments } from "../../util/mongodb";
import CategoryFilterBar from "../../components/ui/filter-bar";

function JobsIndex(props) {
  const jobs = props.jobs;

  return (
    <div>
      <CategoryFilterBar />
      <h1>Jobs Index</h1>
      <Link href="/jobs/new-job">
        <a>Create a new item</a>
      </Link>
      <JobsList jobs={jobs} />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const jobs = await getAllDocuments("jobs");
  return {
    props: {
      jobs: JSON.parse(JSON.stringify(jobs))
    }
  }
}

export default JobsIndex;
