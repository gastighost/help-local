import { useRef } from "react";

function HumanitarianAidForm() {
  const categoryInputRef = useRef();
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const locationInputRef = useRef();
  const hoursInputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const enteredCategory = categoryInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredHours = hoursInputRef.current.value;

    fetch("/api/humanitarian-aid", {
      method: "POST",
      body: JSON.stringify({
        category: enteredCategory,
        title: enteredTitle,
        amount: enteredAmount,
        location: enteredLocation,
        hours: enteredHours,
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
        console.log(data.message);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }
  return (
    <section>
      <h2>Add an aid item!</h2>
      <form onSubmit={registrationHandler}>
        <div>
          <div>
            <label htmlFor="category"></label>
            <input
              type="text"
              id="category"
              placeholder="Aid Category"
              ref={categoryInputRef}
            />
          </div>
          <div>
            <label htmlFor="title"></label>
            <input
              type="text"
              id="title"
              placeholder="Item name"
              ref={titleInputRef}
            />
          </div>
          <div>
            <label htmlFor="amount"></label>
            <input
              type="number"
              id="amount"
              placeholder="Amount"
              ref={amountInputRef}
            />
          </div>
          <div>
            <label htmlFor="location"></label>
            <input
              type="text"
              id="location"
              placeholder="Pickup Address"
              ref={locationInputRef}
            />
          </div>
          <div>
            <label htmlFor="hours"></label>
            <input
              type="text"
              id="hours"
              placeholder="Availability Hours"
              ref={hoursInputRef}
            />
          </div>
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default HumanitarianAidForm;
