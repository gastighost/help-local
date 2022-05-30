import JobItem from "./JobItem";
import classes from "./JobList.module.scss";

function JobList(props) {
  return (
    <div className={classes.itemListContainer}>
      <div className={classes.list}>
        {props.info.map((job) => {
          return <JobItem key={job._id} job={job} type={props.type} />;
        })}
      </div>
    </div>
  );
}

export default JobList;
