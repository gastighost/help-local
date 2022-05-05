import JobItem from "./JobItem";

function JobList(props) {
  // console.log(props.jobs);
  return (
    <ul>
      {props.info.map((job) => {
        return (
          <li key={job._id}>
            <JobItem job={job} type={props.type} />
          </li>
        );
      })}
    </ul>
  );
}

export default JobList;
