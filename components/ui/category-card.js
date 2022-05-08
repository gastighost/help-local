import Link from "next/link";
import styles from "./category-card.module.css";
import Image from "next/image";

function MainCategoryIndex(props) {
  const { name, categoryUrl, caption, imageUrl } = props;
  return (
    <Link href={categoryUrl}>
      <a>
        <div className={styles.carded}>
          <div>
            <Image src={imageUrl} width="130px" height="120px" />
          </div>
          <div className={styles.caption}>
            <h2>{name}</h2>
            <p>{caption}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default MainCategoryIndex;
