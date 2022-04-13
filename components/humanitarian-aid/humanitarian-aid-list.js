import HumanitarianAidItem from "./humanitarian-aid-item";
import styles from "./humanitarian-aid-list.module.css";

function HumanitarianAidList(props) {
  const { info } = props;
  return (
    <ul className={styles.center}>
      {info.map((sale) => {
        return (
          <li key={sale._id}>
            <HumanitarianAidItem info={sale} />
          </li>
        );
      })}
    </ul>
  );
}

export default HumanitarianAidList;
