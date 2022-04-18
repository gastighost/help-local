import HumanitarianAidForm from "../../components/humanitarian-aid/humanitarian-aid-form";
import Link from "next/link";

function NewHumanitarianAid() {
  return (
    <div>
      <HumanitarianAidForm />
      <Link href="/humanitarian-aid">Cancel</Link>
    </div>
  );
}

export default NewHumanitarianAid;
