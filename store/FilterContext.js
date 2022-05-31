import { createContext, useState, useEffect } from "react";

const FilterContext = createContext({
  selected: (false),
  filter: [],
  allItems: [],
  filteredItems: [],
  allItemsHandler: (items) => {},
  filterHandler: (language) => {},
  filterByAgeHandler: (age) => {},
  selectedHandler: (boolean) => {},
  currectFilterHandler: (language, age) => {},
  filterbyLanguageAndAge: (language, age) => {}
});

export const FilterContextProvider = (props) => {
  const [allItems, setAllItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([
  ])
  const [currentFilter, setCurrentFilter] = useState([
  ])
  const [selected, setSelected] = useState()

  useEffect(() => {
    !selected && setCurrentFilter([])
  }, [selected])

  const selectedHandler = (boolean) => {
    setSelected(boolean)
  }

  const currectFilterHandler = (language, age) => {
    setCurrentFilter([language, age])
  }

  const allItemsHandler = (items) => {
    setAllItems((prev) => (
      prev.concat(items)
    ))
    setCurrentFilter(["all"])
  }

  const filterHandler = (language) => {
    setFilteredItems((prev) => (
      allItems.filter((item) => (item.language === language))
      ))
      setCurrentFilter([language])
  }

  const filterByAgeHandler = (age) => {
    setFilteredItems((prev) => (
      allItems.filter((item) => (item.studentAge === parseInt(age)))
      ))
      setCurrentFilter([age])
  }

  const filterbyLanguageAndAge = (language, age) => {
    setFilteredItems((prev) => (
      allItems.filter((item) => (item.studentAge === parseInt(age) && item.language === language))
      ))
  }

  const context = {
    filter: currentFilter,
    selected: selected,
    filteredItems: filteredItems,
    allItems: allItems,
    filterHandler: filterHandler,
    filterByAgeHandler: filterByAgeHandler,
    allItemsHandler: allItemsHandler,
    selectedHandler: selectedHandler,
    currectFilterHandler: currectFilterHandler,
    filterbyLanguageAndAge: filterbyLanguageAndAge
  };

  return (
    <FilterContext.Provider value={context}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContext
