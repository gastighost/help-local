import { Fragment } from "react";
import Link from "next/link";
import CategoryFilterBar from "../../components/ui/filter-bar";

function SocialMediaIndex() {
  return (
    <Fragment>
      <CategoryFilterBar />
      <h1>Social Media</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Fragment>
  );
}

export default SocialMediaIndex;
