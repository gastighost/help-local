import Router from "next/router";
import { useRef } from "react";

function JobsForm(props) {
  const categoryInputRef = useRef();

  // define handlerfunction which sends data to jobs api when submitting the form
  function createJobHandler(event) {
    event.preventDefault();

    // fetch with post method
    fetch("/api/jobs", {
      method: 'POST',
      body: JSON.stringify({
        category: categoryInputRef.currentValue,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
        Router.push("/jobs");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // rendering the form
  return (
    <section>
      <h2>Create new job</h2>
      <form onSubmit={createJobHandler}>
        <div>
          <label htmlFor="category"></label>
          <input
            type="text"
            id="category"
            placeholder="category name"
            ref={categoryInputRef} />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default JobsForm;
