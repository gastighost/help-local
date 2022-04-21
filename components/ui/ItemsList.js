import Item from "./Item"
import classes from "./ItemsList.module.css";
import Card from "./card";
import EducationItem from "../education/EducationItem";

const ItemsList = (props) => {

  const { info } = props;
  console.log(info);
  return <ul className={classes.list}>
    { info.map(item =>
      <Item
        key={item._id}
        id={item._id}
        category={item.category}
        title={item.title}
        location={item.location}
        type={props.type}
        isBooked={item.isBookmarked}
        info={ item }
      />
    )}
  </ul>
}

export default ItemsList
