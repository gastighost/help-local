import NewEducationForm from "../../components/education/NewEducationForm";
import Link from "next/link";

function NewEducation() {
  return (
    <div>
      <NewEducationForm />
      <Link href="/humanitarian-aid">Cancel</Link>
    </div>
  );
}

export default NewEducation;
