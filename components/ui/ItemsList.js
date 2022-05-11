import Item from "./Item";
import classes from "./ItemsList.module.scss";

const ItemsList = (props) => {
  const { info } = props;
  return (
    <div className={classes.itemListContainer}>
    <div className={classes.list}>
      {info.map((item) => (
        <Item
          info={item}
        />
      ))}
    </div>
    </div>
  );
};

export default ItemsList;
