import Link from "next/link";
import JobsForm from "../../components/jobs/jobs-form";

function NewJobsPage() {
  return (
    <div>
      <h2>Create new job</h2>
      <JobsForm />
      <Link href="/jobs">Cancel</Link>
    </div>);
}

export default NewJobsPage;
