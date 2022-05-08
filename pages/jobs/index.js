import { Fragment } from "react";
import Link from "next/link";
import Button from "../../components/ui/button";
import JobList from "../../components/jobs/JobList";
// import ItemsList from "../../components/ui/ItemsList";
import { getAllDocuments } from "../../util/mongodb";
import CategoryFilterBar from "../../components/ui/filter-bar";
import { getSession } from "next-auth/client";

function JobsIndex(props) {
  const jobs = props.jobs;

  return (
    <div>
      <CategoryFilterBar />
      <h1>Jobs Index</h1>
      <Button>
        <Link href="/jobs/new-job">
          <a>Create a new item</a>
        </Link>
      </Button>
      <JobList info={jobs} type="jobs" />
      <Button>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const jobs = await getAllDocuments("jobs");
  const session = await getSession(context);
  return {
    props: {
      jobs: JSON.parse(JSON.stringify(jobs)),
      session
    }
  }
}

export default JobsIndex;
