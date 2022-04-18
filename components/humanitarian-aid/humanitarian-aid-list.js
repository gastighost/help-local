import Link from "next/link";

import HumanitarianAidItem from "./humanitarian-aid-item";
import styles from "./humanitarian-aid-list.module.css";

function HumanitarianAidList(props) {
  const { info } = props;
  return (
    <ul className={styles.center}>
      {info.map((aid) => {
        return (
          <Link href={`/humanitarian-aid/${aid._id}`} key={aid._id}>
            <li>
              <HumanitarianAidItem info={aid} />
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default HumanitarianAidList;
