import AidItem from "./aid-item";
import styles from "./aid-item-list.module.css";

const AidItemList = (props) => {
  const { info } = props;
  return (
    <ul className={styles.list}>
      {info.map((item) => (
        <AidItem
          key={item._id}
          id={item._id}
          category={item.category}
          title={item.title}
          location={item.location}
          type={props.type}
          isBookmarked={item.isBookmarked}
          info={item}
        />
      ))}
    </ul>
  );
};

export default AidItemList;