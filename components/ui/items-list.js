import Item from "./item";
import classes from "./ItemsList.module.css";

const ItemsList = (props) => {
  const { info, type } = props;

  return (
    <ul className={classes.list}>
      {info.map((item) => (
        <Item
          key={item._id}
          id={item._id}
          category={item.category}
          title={item.title}
          location={item.location}
          info={info}
          type={type}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
