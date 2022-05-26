import { Fragment } from "react";
import Link from "next/link";
import Greeting from "../../components/social-media/greeting";

function SocialMediaIndex() {
  return (
    <Fragment>
      <Greeting/>
      <h1>Social Media</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Fragment>
  );
}

export default SocialMediaIndex;
