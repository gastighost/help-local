import Card from "../ui/card";

function jobsItem(props) {
  const job = props;
  return (
    <Card>
      <h2>Category: {job.category}</h2>
      <h3>Title: {job.title}</h3>
      <p>Amount: {job.description}</p>
    </Card>
  )
}

export default jobsItem;
