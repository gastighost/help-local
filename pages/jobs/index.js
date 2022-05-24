import { Fragment, useState } from "react";
import Link from "next/link";
import Button from "../../components/ui/button";
import JobList from "../../components/jobs/JobList";
import ItemsList from "../../components/ui/ItemsList";
import JobListInfo from "../../components/jobs/JobListInfo";
import { getAllDocuments } from "../../util/mongodb";
import CategoryFilterBar from "../../components/ui/filter-bar";
import { getSession } from "next-auth/client";

function JobsIndex(props) {
  const jobs = props.jobs;
  const [newJobModalIsOpen, setnewJobModalIsOpen] = useState(false)

  const openModal = () => {
    setnewJobModalIsOpen(true)
  }

  const closeModal = () => {
    setnewJobModalIsOpen(false)
  }

  return (
    <Fragment>
      {/* <CategoryFilterBar /> */}
      <JobListInfo
        openModal={openModal}
        newJobModalIsOpen={newJobModalIsOpen}
        closeModal={closeModal} />
      {/* <Button>
        <Link href="/jobs/new-job">
          <a>Create a new item</a>
        </Link>
      </Button> */}
      <JobList info={jobs} type="jobs" />
      {/* <ItemsList info={jobs} type="jobs" /> */}
      <Button href="/">
        <a>Back to home</a>
      </Button>
    </Fragment>
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
