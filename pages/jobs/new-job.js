import Link from "next/link";
import JobsForm from "../../components/jobs/jobs-form";

function NewJobsPage() {
  return (
    <div>
      <JobsForm />
      <Link href="/jobs">Cancel</Link>
    </div>);
}

export default NewJobsPage;
