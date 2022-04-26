import NewEducationForm from "../../components/education/NewEducationForm";
import Link from "next/link";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

function NewEducation(props) {
  const [modalIsOpened, setModalIsOpened] = useState(true)


  const openModalHandler = () => {
    setModalIsOpened(true)
    props.modalState
  }

  const closeModalHandler = () => {
    setModalIsOpened(false)
    props.modalState
  }
  return <Fragment>
    {modalIsOpened && <NewEducationForm onCancel={closeModalHandler}/>}
  </Fragment>
}

export default NewEducation;
