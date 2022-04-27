import { findDocumentById } from "../../util/mongodb";
import Link from "next/link";
// import { useRouter } from "next/router";

function JobShowPage(props) {
  // const router = useRouter();
  // const jobId = router.query.jobId;
  const selectedJob = props.job[0];
  return (
    <div>
      <h2>{selectedJob.title}</h2>
      <p>{selectedJob.company}, {selectedJob.category}</p>
      <Link href="/jobs">Back to job items</Link>
    </div>
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
