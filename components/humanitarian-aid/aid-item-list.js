import AidItem from "./aid-item";
import styles from "./aid-item-list.module.css";

const AidItemList = (props) => {
  const { info } = props;
  return (
    <ul className={styles.list}>
      {info.map((item) => (
        <AidItem key={item._id} type={props.type} info={item} />
      ))}
    </ul>
  );
};

export default AidItemList;
