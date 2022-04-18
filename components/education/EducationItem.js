import classes from "./EducationItem.module.css";
import Card from "../ui/card";

function EducationItem(props) {
  const { info } = props;
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h2>Category: {info.purchaseMethod}</h2>
          <h3>Title: {info.name}</h3>
          <p>Drop off location: {info.storeLocation}</p>
        </div>
        <div className={classes.actions}>
          <button>Request!</button>
        </div>
      </Card>
    </li>
  )
}

export default EducationItem
