import classes from "./educationEditForm.module.css";
import Card from "../ui/card";
import { useRef } from "react";
import { useRouter } from "next/router"
import {Fragment} from "react"



const EducationEditForm = (props) => {
  const { id, creatorId } = props;

  const router = useRouter()

  const titleInputRef = useRef()
  const categoryInputRef = useRef()
  const locationInputRef = useRef()
  const tutorInputRef = useRef()
  const languageInputRef = useRef()
  const contactInputRef = useRef()
  const studentAgeInputRef = useRef()


  const cancelHandler = () => {
    console.log("Cancel clicked");
    props.onCancel()
  }


  const editHandler = (event) => {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredCategory = categoryInputRef.current.value
    const enteredLocation = locationInputRef.current.value
    const enteredTutor = tutorInputRef.current.value
    const enteredLanguage = languageInputRef.current.value
    const enteredContact = contactInputRef.current.value
    const enteredstudentAge = studentAgeInputRef.current.value

    fetch("/api/education/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        id,
        creatorId,
        category: enteredCategory,
        title: enteredTitle,
        tutor: enteredTutor,
        location: enteredLocation,
        language: enteredLanguage,
        contact: enteredContact,
        studentAge: enteredstudentAge
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        // router.push("/education/" + data.educationId);
        cancelHandler()
        console.log(data.message, data.education);
        console.log(data.EducationId);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return <Fragment>
  <div className={classes.backdrop} onClick={cancelHandler}/>
  <Card className={classes.modal}>
    <form className={classes.form} onSubmit={editHandler}>
    <select
        className={classes.select}
        ref={categoryInputRef}>
        <option value='education'>Education</option>
        <option value='humanitarian_aid'>Humanitarian Aid</option>
        <option value='jobs'>Jobs</option>
        <option value='accommodation'>Accommodation</option>
      </select>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" required id="title" ref={titleInputRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="location">Location</label>
        <input type="text" required id="location" ref={locationInputRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="tutor">Tutor's name</label>
        <input type="text" required id="tutor" ref={tutorInputRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="language">Language</label>
        <input type="text" required id="language" ref={languageInputRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="contact">Contact details</label>
        <input type="text" required id="contact" ref={contactInputRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="studentAge">Student's age</label>
        <input type="number" required id="studentAge" ref={studentAgeInputRef}></input>
      </div>
      <div className={classes.actions}>
        <button onClick={cancelHandler}>Cancel</button>
        <button>Add</button>
      </div>
    </form>
  </Card>
  </Fragment>
}

export default EducationEditForm
