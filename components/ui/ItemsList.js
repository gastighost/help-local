import Item from "./Item";
import classes from "./ItemsList.module.scss";
import { useState, useEffect, useContext } from "react";
import FilterContext from "../../store/FilterContext"

const ItemsList = (props) => {
  const { info } = props;

  // Connecting to our Context API
  const filterCtx = useContext(FilterContext)
  const allItems = filterCtx.allItems
  const filteredItems = filterCtx.filteredItems
  const activeLanguage = filterCtx.activeLanguage
  const activeAge = filterCtx.activeAge
  console.log(allItems)
  console.log(filteredItems)

  // Loading all items to the Context API when the page loads
  useEffect(() => {
    filterCtx.allItemsHandler(info)
  }, [])

  useEffect(() => {
    if (activeLanguage) {
      filterCtx.filteredByLanguage(activeLanguage)
    } else if (activeAge) {
      filterCtx.filteredByAge(activeAge)
    } else if (!activeLanguage && !activeAge) {
      filterCtx.filterAll(info)
    }
  }, [activeLanguage, activeAge])

  // useEffect(() => {
  //   !activeAge ? filterCtx.filterAll(info) : filterCtx.filteredByAge(activeAge)
  // }, [activeAge])

  return (
    <div className={classes.itemListContainer}>
    <div className={classes.list}>
      {filteredItems.map((item) => (
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
