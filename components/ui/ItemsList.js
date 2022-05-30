import Item from "./Item";
import classes from "./ItemsList.module.scss";
import { useState, useEffect, useContext } from "react";
import FilterContext from "../../store/FilterContext"

const ItemsList = (props) => {
  const { info } = props;

  // Connecting to our Context API
  const filterCtx = useContext(FilterContext)
  console.log(filterCtx.filter);

  // Loading all items to the Context API when the page loads
  useEffect(() => {
    if (filterCtx.allItems.length === 0) {
      filterCtx.allItemsHandler(info)
    } else null
  }, [])

  return (
    <div className={classes.itemListContainer}>
    <div className={classes.list}>
      { filterCtx.filter === "all" || filterCtx.selected === false ? filterCtx.allItems.map((item) => (
        <Item
          key = {item._id}
          info={item}
        />
      )) : filterCtx.filteredItems.map((item) => (
        <Item
          key = {item._id}
          info={item}
        />
      ))}
    </div>
    </div>
  );
};

export default ItemsList;
