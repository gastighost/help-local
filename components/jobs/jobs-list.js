import JobsItem from "./jobs-item";

function JobsList(props) {
  // console.log(props.jobs);
  return (
    <ul>
      {props.jobs.map((job) => {
        return (
          <li key={job._id}>
            <JobsItem job={job} />
          </li>
        );
      })}
    </ul>
  );
}

export default JobsList;
