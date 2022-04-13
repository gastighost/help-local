import JobsItem from "./jobs-item";

function jobsList(props) {
  // console.log(props.jobs);
  return (
    <ul>
      {props.jobs.map((job) => {
        return (
          <li key={job.key}>
            <JobsItem job={job} />
          </li>
        );
      })}
    </ul>
  );
}

export default jobsList;
