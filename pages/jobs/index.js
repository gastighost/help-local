import { Fragment } from "react";
import Link from "next/link";

function JobsIndex() {
  return (
    <div>
      <h1>Jobs Index</h1>
      <ul>
        <li>Category</li>
        <li>Title</li>
        <li>Location</li>
        <li>Salary</li>
        <li>Department</li>
        <li>Position</li>
        <li>Hours</li>
        <li>Requirements</li>
        <li>Language</li>
        <li>Description</li>
        <li>Company/Employer</li>
      </ul>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export default JobsIndex;
