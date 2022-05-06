import styles from "./category-container.module.css";

function CategoryContainer(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default CategoryContainer;
