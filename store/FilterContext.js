import { createContext, useState, useEffect } from "react";

const FilterContext = createContext({
  selected: (false),
  filter: [],
  allItems: [],
  filteredItems: [],
  allItemsHandler: (items) => {},
  filterHandler: (language) => {},
  selectedHandler: (boolean) => {}
});

export const FilterContextProvider = (props) => {
  const [allItems, setAllItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([
  ])
  const [currentFilter, setCurrentFilter] = useState([
  ])
  const [selected, setSelected] = useState()

  // useEffect(() => {
  //   currentFilter !== "all" ? setSelected(true) : setSelected(false)
  // }, [currentFilter])

  const selectedHandler = (boolean) => {
    setSelected(boolean)
  }

  const allItemsHandler = (items) => {
    setAllItems((prev) => (
      prev.concat(items)
    ))
    setCurrentFilter("all")
  }

  const filterHandler = (language) => {
    setFilteredItems((prev) => (
      allItems.filter((item) => item.language === language)
    ))
    setCurrentFilter(language)
  }

  const context = {
    filter: currentFilter,
    selected: selected,
    filteredItems: filteredItems,
    allItems: allItems,
    filterHandler: filterHandler,
    allItemsHandler: allItemsHandler,
    selectedHandler: selectedHandler
  };

  return (
    <FilterContext.Provider value={context}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContext
