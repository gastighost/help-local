import classes from "./jobs-form.module.scss";
import Button from "../ui/button";
import Router from "next/router";
import { useRef } from "react";
import { getSession } from "next-auth/client";

function JobsForm(props) {
  const jobInputRef = [
    "category",
    "title",
    "location",
    "monthlySalary",
    "weeklyHours",
    "requirements",
    "language",
    "description",
    "company",
    "provider"
  ];
  // define input variables with useRef
  const categoryInputRef = useRef();
  const titleInputRef = useRef();
  const locationInputRef = useRef();
  const monthlySalaryInputRef = useRef();
  const weeklyHoursInputRef = useRef();
  const requirementsInputRef = useRef();
  const languageInputRef = useRef();
  const descriptionInputRef = useRef();
  const companyInputRef = useRef();
  // const isProviderInputRef = useRef();

  const cancelHandler = () => {
    // console.log("Cancel clicked");
    props.onCancel()
  }

  // define handlerfunction which sends data to jobs api when submitting the form
  function createJobHandler(event) {
    event.preventDefault();

    const enteredCategory = categoryInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredMonthlySalary = monthlySalaryInputRef.current.value;
    const enteredWeeklyHours = weeklyHoursInputRef.current.value;
    const enteredRequirements = requirementsInputRef.current.value;
    const enteredLanguage = languageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;
    // const enteredProvider = isProviderInputRef.current.value;


    // fetch with post method
    fetch("/api/jobs", {
      method: 'POST',
      body: JSON.stringify({
        category: enteredCategory,
        title: enteredTitle,
        location: enteredLocation,
        monthlySalary: enteredMonthlySalary,
        weeklyHours: enteredWeeklyHours,
        requirements: enteredRequirements,
        language: enteredLanguage,
        description: enteredDescription,
        company: enteredCompany,
        // isProvider: enteredProvider,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        // console.log(response);
        if (response.ok) {
          return response.json();
        }
        response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        // console.log(data);
        Router.push("/jobs");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // rendering the form
  return (
      <form className={classes.form} onSubmit={createJobHandler}>
        <div className={classes.control}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            ref={categoryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            ref={locationInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="monthlySalary">Monthly Salary</label>
          <input
            type="number"
            id="monthlySalary"
            ref={monthlySalaryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="weeklyHours">Weekly Hours</label>
          <input
            type="number"
            id="weeklyHours"
            ref={weeklyHoursInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="requirements">Requirements</label>
          <input
            type="text"
            id="requirements"
            ref={requirementsInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="language">Language</label>
          <input
            type="text"
            id="language"
            ref={languageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            ref={descriptionInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            ref={companyInputRef} />
        </div>
        {/* <div>
          <label htmlFor="provider">
          Will you be providing or requesting this item?
          </label>
          <select id="provider" ref={isProviderInputRef}>
            <option value="true">Providing</option>
            <option value="false">Requesting</option>
          </select>
        </div> */}
        <div className={classes.action}>
          <Button>Add</Button>
          <Button onClick={cancelHandler}>Cancel</Button>
        </div>
      </form>
  );
};

export default JobsForm;
