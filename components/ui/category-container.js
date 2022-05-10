import styles from "./category-container.module.scss";

function CategoryContainer(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default CategoryContainer;
