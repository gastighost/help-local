import JobItem from "./JobItem";
import classes from "./JobList.module.scss";

function JobList(props) {
  // console.log(props.jobs);
  return (
    <div className={classes.itemListContainer}>
      <div className={classes.list}>
        {props.info.map((job) => {
          return (
            <JobItem job={job} type={props.type} />
          );
        })}
      </div>
    </div>
  );
}

export default JobList;
