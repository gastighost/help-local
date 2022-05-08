import JobItem from "./JobItem";
import classes from "./JobList.module.css";

function JobList(props) {
  // console.log(props.jobs);
  return (
    <ul className={classes.list}>
      {props.info.map((job) => {
        return (
          <div key={job._id}>
            <JobItem job={job} type={props.type} />
          </div>
        );
      })}
    </ul>
  );
}

export default JobList;
