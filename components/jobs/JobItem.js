import classes from "./JobItem.module.css";
import Link from "next/link";
import Card from "../ui/card";
import Button from "../ui/button";

function JobItem(props) {
  // console.log(props.job);
  return (
    <Card>
      <div className={classes.content}>
        <h2>Category: {props.job.category}</h2>
        <h3>Title: {props.job.title}</h3>
        <h3>Company: {props.job.company}</h3>
        <p>Description: {props.job.description}</p>
        <p>Monthly salary in EUR: {props.job.monthlySalary}</p>
      </div>
      <div className={classes.actions}>
        <Button>
          <Link href={`/${props.type}/${props.job._id}`}>Open</Link>
        </Button>
      </div>
    </Card>
  );
}

export default JobItem;
