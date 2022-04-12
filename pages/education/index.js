import { Fragment } from "react";
import Link from "next/link";

function EducationIndex() {
  return (
    <Fragment>
      <h1>Education Index</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Fragment>
  );
}

export default EducationIndex;
