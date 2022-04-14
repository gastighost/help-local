import Link from "next/link";

import HumanitarianAidItem from "./humanitarian-aid-item";
import styles from "./humanitarian-aid-list.module.css";

function HumanitarianAidList(props) {
  const { info } = props;
  return (
    <ul className={styles.center}>
      {info.map((sale) => {
        return (
          <Link href={`/humanitarian-aid/${sale._id}`} key={sale._id}>
            <li>
              <HumanitarianAidItem info={sale} />
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default HumanitarianAidList;
