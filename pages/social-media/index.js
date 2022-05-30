import { Fragment } from "react";
import Link from "next/link";
import Cardcontainer from "../../components/social-media/cardcontainer";
import Topbox from "../../components/social-media/topbox";

function SocialMediaIndex() {
  return (
    <Fragment>
      <Topbox/>
      <Cardcontainer/>
      {/* <Link href="/">
        <a>Back to home</a>
      </Link> */}
    </Fragment>
  );
}

export default SocialMediaIndex;
