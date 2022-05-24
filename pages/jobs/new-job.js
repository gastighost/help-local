import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Link from "next/link";
import JobsForm from "../../components/jobs/jobs-form";

function NewJobsPage() {
  const [modalIsOpened, setModalIsOpened] = useState(true)


  const openModalHandler = () => {
    setModalIsOpened(true)
    props.modalState
  }

  const closeModalHandler = () => {
    setModalIsOpened(false)
    props.modalState
  }

  return (
    <Fragment>
      {modalIsOpened && <JobsForm onCancel={closeModalHandler}/>}

      {/* <JobsForm />
      <Link href="/jobs">Cancel</Link> */}
    </Fragment>);
}

export default NewJobsPage;
