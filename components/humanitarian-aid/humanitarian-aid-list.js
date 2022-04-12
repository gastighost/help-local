import HumanitarianAidItem from "./humanitarian-aid-item";
import styles from "./humanitarian-aid-list.module.css";

function HumanitarianAidList(props) {
  const { info } = props;
  return (
    <ul className={styles.center}>
      {info.map((sale) => {
        return <HumanitarianAidItem key={sale._id} info={sale} />;
      })}
    </ul>
  );
}

export default HumanitarianAidList;
