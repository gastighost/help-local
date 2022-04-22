import { Fragment } from "react";

function AidItemDetail(props) {
  const { itemDetails } = props;
  return (
    <Fragment>
      <h1>Humanitarian Show Page!</h1>
      <h2>Category: {itemDetails.category}</h2>
      <h3>Title: {itemDetails.title}</h3>
      <p>Amount: {itemDetails.amount}</p>
      <p>Drop off location: {itemDetails.location}</p>
      <p>Hours: {itemDetails.hours}</p>
      <p>
        {itemDetails.providing === true
          ? "This item is being provided"
          : "This item is being requested"}
      </p>
      <p>Taken?{itemDetails.taken}</p>
      <p>Taken by: {itemDetails.taken_by}</p>
      <p>Chat active? {itemDetails.chat_active}</p>
    </Fragment>
  );
}

export default AidItemDetail;
