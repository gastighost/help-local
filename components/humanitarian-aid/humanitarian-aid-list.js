import HumanitarianAidItem from "./humanitarian-aid-item";
import styles from "./humanitarian-aid-list.module.css";

function HumanitarianAidList(props) {
  const { info } = props;
  return (
    <ul className={styles.center}>
      {info.map((sale) => {
        return <li><HumanitarianAidItem key={sale._id} info={sale} /></li>;
      })}
    </ul>
  );
}

export default HumanitarianAidList;
