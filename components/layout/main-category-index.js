import Link from "next/link";
import styles from "./main-category-index.module.css";

function MainCategoryIndex(props) {
  const { name, categoryUrl } = props;
  return (
    <Link href={categoryUrl}>
      <a>
        <div className={styles.carded}>
          <h2>{name}</h2>
        </div>
      </a>
    </Link>
  );
}

export default MainCategoryIndex;
