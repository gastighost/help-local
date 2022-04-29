import HumanitarianAidForm from "../../components/humanitarian-aid/humanitarian-aid-form";
import Link from "next/link";
import { useState } from "react";

function NewHumanitarianAid(props) {
  const [modalIsOpened, setModalIsOpened] = useState(true);

  const openModalHandler = () => {
    setModalIsOpened(true);
    props.modalState;
  };

  const closeModalHandler = () => {
    setModalIsOpened(false);
    props.modalState;
  };
  return (
    <div>
      <HumanitarianAidForm />
      <Link href="/humanitarian-aid">Cancel</Link>
    </div>
  );
}

export default NewHumanitarianAid;
