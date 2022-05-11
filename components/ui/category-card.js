import Link from "next/link";
import styles from "./category-card.module.scss";
import Image from "next/image";

function MainCategoryIndex(props) {
  const { name, categoryUrl, caption, imageUrl } = props;
  return (
    <Link href={categoryUrl}>
      <a>
        <div className={styles.carded}>
          <div className={styles.image}>
            <Image src={imageUrl} width="130px" height="120px" />
          </div>
          <div className={styles.caption}>
            <h4 className={styles.main}>{name}</h4>
            <p className={styles.support}>{caption}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default MainCategoryIndex;
