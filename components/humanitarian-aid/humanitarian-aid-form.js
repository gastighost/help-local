import { useRef } from "react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Card from "../ui/card";
import styles from "./humanitarian-aid-form.module.css";

function HumanitarianAidForm(props) {
  const router = useRouter();

  const categoryInputRef = useRef();
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const measurementInputRef = useRef();
  const locationInputRef = useRef();
  const hoursInputRef = useRef();
  const isProviderInputRef = useRef();

  const cancelHandler = () => {
    console.log("Cancel clicked");
    props.onCancel();
  };

  function registrationHandler(event) {
    event.preventDefault();

    const enteredCategory = categoryInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredMeasurement = measurementInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredHours = hoursInputRef.current.value;
    const enteredIsProvider = isProviderInputRef.current.value;

    fetch("/api/humanitarian-aid", {
      method: "POST",
      body: JSON.stringify({
        category: enteredCategory,
        title: enteredTitle,
        amount: enteredAmount,
        measurement: enteredMeasurement,
        location: enteredLocation,
        hours: enteredHours,
        provider: enteredIsProvider,
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
        console.log(data.message, data.aid);
        router.push("/humanitarian-aid/" + data.aid._id);
      })
      .catch((error) => {
        console.log(error);
      });

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }
  return (
    <Fragment>
      <div className={styles.backdrop} onClick={cancelHandler} />
      <Card className={styles.modal}>
        <form className={styles.form} onSubmit={registrationHandler}>
          <div>
            <div className={styles.control}>
              <label htmlFor="category"></label>
              <input
                type="text"
                id="category"
                placeholder="Aid Category (Groceries, Home Items, etc.)"
                ref={categoryInputRef}
                required
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="title"></label>
              <input
                type="text"
                id="title"
                placeholder="Item name"
                ref={titleInputRef}
                required
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="amount"></label>
              <input
                type="number"
                id="amount"
                placeholder="Amount in numbers"
                ref={amountInputRef}
                required
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="measurement"></label>
              <input
                type="text"
                id="measurement"
                placeholder="Unit of measurement (KG, pieces, etc.)"
                ref={measurementInputRef}
                required
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="location"></label>
              <input
                type="text"
                id="location"
                placeholder="Pickup Address"
                ref={locationInputRef}
                required
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="hours"></label>
              <input
                type="text"
                id="hours"
                placeholder="Availability Hours"
                ref={hoursInputRef}
                required
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="provider">
                Will you be providing or requesting this item?
              </label>
              <select
                className={styles.select}
                id="provider"
                ref={isProviderInputRef}
              >
                <option value="true">Providing</option>
                <option value="false">Requesting</option>
              </select>
            </div>
            <button>Add</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
}

export default HumanitarianAidForm;
