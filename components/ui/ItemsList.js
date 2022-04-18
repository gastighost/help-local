import Item from "./Item"
import classes from "./ItemsList.module.css";

const ItemsList = (props) => {

  const { info } = props;

  return <ul className={classes.list}>
    { info.map(item =>
      <Item
      key={item.id}
      id={item.id}
      category={item.category}
      title={item.title}
      location={item.location}
      info={info}
      />
    )}
  </ul>
}

export default ItemsList
