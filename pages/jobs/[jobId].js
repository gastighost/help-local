import { findDocumentById, findUserByEmail } from "../../util/mongodb";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useState, Fragment } from "react";
import JobEditForm from "../../components/jobs/JobEditForm";
import Button from "../../components/ui/button";


function JobShowPage(props) {
  const router = useRouter();
  const jobId = router.query.jobId;
  const [isEditing, setisEditing] = useState(false)
  // IMPLEMENT USER SPECIFIC INTERACTIONS
  const { job, selectedUser } = props;

  // const creatorId = selectedJob.user_id;;
  const selectedJob = props.job[0];

  const isEqual = selectedUser._id === selectedJob.user_id;

  function turnOffEdit() {
    setisEditing(false);
  }

  function turnOnEdit() {
    setisEditing(true);
  }

  function deleteHandler(event) {
    event.preventDefault();

    fetch("/api/jobs/" + jobId, {
      method: "DELETE",
      body: JSON.stringify({
        jobId: jobId,
        // creatorId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        router.push("/jobs");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Fragment>
      <div>
        <h2>{selectedJob.title}</h2>
        <p>{selectedJob.company}, {selectedJob.category}</p>
        <Button>
          <Link href="/jobs">Back to job items</Link>
        </Button>
      </div>
      {!isEditing && isEqual && (
        <div>
          <Button onClick={turnOnEdit}>Edit</Button>
          <Button onClick={deleteHandler}>Delete</Button>
        </div>
      )}
      {isEditing && (
        <JobEditForm onCancel={turnOffEdit} id={jobId}></JobEditForm>
      )}
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const jobId = context.params.jobId;
  const job = await findDocumentById("jobs", jobId);
  const session = await getSession(context);
  const user = await findUserByEmail(session.user.email);

  return {
    props: {
      job: JSON.parse(JSON.stringify(job)),
      selectedUser: JSON.parse(JSON.stringify(user)),
    }
  }
}

export default JobShowPage;
