import { useRef } from "react";
import { useRouter } from "next/router";

function AidEditForm(props) {
  const { handleEditOff, id } = props;

  const router = useRouter();

  const categoryInputRef = useRef();
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const locationInputRef = useRef();
  const hoursInputRef = useRef();

  function editHandler(event) {
    event.preventDefault();

    const enteredCategory = categoryInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredHours = hoursInputRef.current.value;

    fetch("/api/humanitarian-aid/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        id,
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
        router.push("/humanitarian-aid/" + data.aidId);
        handleEditOff(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <section>
      <h2>Edit an aid item!</h2>
      <form onSubmit={editHandler}>
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
          <button type="submit">Edit</button>
          <button onClick={handleEditOff}>Cancel Edit</button>
        </div>
      </form>
    </section>
  );
}

export default AidEditForm;
