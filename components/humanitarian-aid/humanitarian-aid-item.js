import Card from "../ui/card";

function HumanitarianAidItem(props) {
  const { info } = props;
  return (
    <Card>
      <h2>Category: {info.category}</h2>
      <h3>Title: {info.title}</h3>
      <p>Amount: {info.amount.$numberDecimal}</p>
      <p>Hours: {info.hours}</p>
    </Card>
  );
}

export default HumanitarianAidItem;
