import Item from "./Item";
import classes from "./ItemsList.module.scss";
import { useState, useEffect, useContext } from "react";
import FilterContext from "../../store/FilterContext"

const ItemsList = (props) => {
  const { info } = props;

  // Connecting to our Context API
  const filterCtx = useContext(FilterContext)
  const filteredItems = filterCtx.filteredItems
  const activeLanguage = filterCtx.activeLanguage
  const activeLocation = filterCtx.activeLocation

  // Loading all items to the Context API when the page loads
  useEffect(() => {
    filterCtx.allItemsHandler(info)
  }, [])

  // Filtering items depending on user selection
  useEffect(() => {
    if (activeLanguage) {
      filterCtx.filteredByLanguage()
    } else if (activeLocation) {
      filterCtx.filteredByLocation()
    } else if (!activeLanguage && !activeLocation) {
      filterCtx.filterAll(info)
    }
  }, [activeLanguage, activeLocation])

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

// return (
//   <div className={classes.itemListContainer}>
//   <div className={classes.list}>
//     {filteredItems.map((item) => (
//         <Item
//           key = {item._id}
//           info={item}
//         />
//       ))}
//   </div>
//   </div>
// );
