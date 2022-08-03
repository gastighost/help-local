import classes from "./greeting-card.module.scss"

function GreetingCard() {
  return (
    <div>
      <h1 className={classes.header}>Hey!</h1>
      <h2 className={classes.support}>What are you looking for?</h2>
    </div>
  );
}

export default GreetingCard;
