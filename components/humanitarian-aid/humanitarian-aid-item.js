import styles from "./humanitarian-aid-item.module.css";

function HumanitarianAidItem(props) {
  const { info } = props;
  return (
    <li className={styles.card}>
      <h2>Category: {info.purchaseMethod}</h2>
      <h3>Title: {info.items[0].name}</h3>
      <p>Amount: {info.items.length}</p>
      <p>Drop off location: {info.storeLocation}</p>
      <p>Hours: {info.customer.satisfaction}</p>
    </li>
  );
}

export default HumanitarianAidItem;
