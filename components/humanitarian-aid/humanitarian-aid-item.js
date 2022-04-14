import Card from "../ui/card";

function HumanitarianAidItem(props) {
  const { info } = props;
  return (
    <Card>
      <h2>Category: {info.purchaseMethod}</h2>
      <h3>Title: {info.items[0].name}</h3>
      <p>Amount: {info.items.length}</p>
      <p>Drop off location: {info.storeLocation}</p>
      <p>Hours: {info.customer.satisfaction}</p>
    </Card>
  );
}

export default HumanitarianAidItem;
