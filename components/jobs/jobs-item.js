import Card from "../ui/card";

function jobsItem(props) {
  return (
    <Card>
      <h2>Category: {props.job.category}</h2>
      <h3>Title: {props.job.title}</h3>
      <h3>Company: {props.job.company}</h3>
      <p>Description: {props.job.description}</p>
      <p>Monthly salary in EUR: {props.job.monthlySalary}</p>
    </Card>
  )
}

export default jobsItem;
