import Item from "./Item";
import classes from "./ItemsList.module.css";

const ItemsList = (props) => {
  const { info } = props;
  return (
    <ul className={classes.list}>
      {info.map((item) => (
        <Item
          info={item}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
