import { findDocumentById } from "../../util/mongodb";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useState, Fragment } from "react";
import JobEditForm from "../../components/jobs/JobEditForm";
import Button from "../../components/ui/button";


function JobShowPage(props) {
  const router = useRouter();
  const jobId = router.query.jobId;
  const [jobEditModalisOpen, setJobEditModalisOpen] = useState(false)
  // IMPLEMENT USER SPECIFIC INTERACTIONS
  //
  // const { job, selectedUser } = props;
  // const selectedJob = job[0];

  // const creatorId = selectedJob.user_id;


  // const isEqual = selectedUser._id === job[0].user_id;
  const selectedJob = props.job[0];

  function turnOffEdit() {
    setJobEditModalisOpen(false);
  }

  function turnOnEdit() {
    setJobEditModalisOpen(true);
  }

  return (
    <Fragment>
      <div>
        <h2>{selectedJob.title}</h2>
        <p>{selectedJob.company}, {selectedJob.category}</p>
        <Link href="/jobs">Back to job items</Link>
      </div>
      <div>
        <Button onClick={turnOnEdit}>Edit</Button>
      </div>
      {jobEditModalisOpen && (
        <JobEditForm></JobEditForm>
      )}
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const jobId = context.params.jobId;
  const job = await findDocumentById("jobs", jobId);

  return {
    props: {
      job: JSON.parse(JSON.stringify(job))
    }
  }
}

export default JobShowPage;
