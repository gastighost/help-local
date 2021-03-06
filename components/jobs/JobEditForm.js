import Router from "next/router";
import { useRef } from "react";
import {Fragment} from "react"

function JobEditForm(props) {
  const { selectedJob, creatorId } = props;

  const jobId = selectedJob._id.toString();
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
    console.log("Cancel clicked");
    props.onCancel()
  }

  function editJobHandler(event) {
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

    fetch("/api/jobs/" + jobId, {
      method: 'PATCH',
      body: JSON.stringify({
        jobId: jobId,
        category: enteredCategory,
        title: enteredTitle,
        location: enteredLocation,
        monthlySalary: enteredMonthlySalary,
        weeklyHours: enteredWeeklyHours,
        requirements: enteredRequirements,
        language: enteredLanguage,
        description: enteredDescription,
        company: enteredCompany,
        user_id: creatorId,
        isBookmarked: selectedJob.isBookmarked,
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
        cancelHandler();
        Router.push(`/jobs/${jobId}`);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <Fragment>
      <form onSubmit={editJobHandler}>
        <div>
          <label htmlFor="category"></label>
          <input
            type="text"
            id="category"
            placeholder="category"
            ref={categoryInputRef} />
        </div>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            placeholder="title"
            ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="location"></label>
          <input
            type="text"
            id="location"
            placeholder="location"
            ref={locationInputRef} />
        </div>
        <div>
          <label htmlFor="monthlySalary"></label>
          <input
            type="number"
            id="monthlySalary"
            placeholder="monthlySalary"
            ref={monthlySalaryInputRef} />
        </div>
        <div>
          <label htmlFor="weeklyHours"></label>
          <input
            type="number"
            id="weeklyHours"
            placeholder="weeklyHours"
            ref={weeklyHoursInputRef} />
        </div>
        <div>
          <label htmlFor="requirements"></label>
          <input
            type="text"
            id="requirements"
            placeholder="requirements"
            ref={requirementsInputRef} />
        </div>
        <div>
          <label htmlFor="language"></label>
          <input
            type="text"
            id="language"
            placeholder="language"
            ref={languageInputRef} />
        </div>
        <div>
          <label htmlFor="description"></label>
          <input
            type="text"
            id="description"
            placeholder="description"
            ref={descriptionInputRef} />
        </div>
        <div>
          <label htmlFor="company"></label>
          <input
            type="text"
            id="company"
            placeholder="company"
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
        <button>Submit</button>
      </form>
    </Fragment>
  )
}

export default JobEditForm;
