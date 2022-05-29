import { createContext, useState } from "react";

const FilterContext = createContext({
  filter: [],
  filteredItems: [],
  handleTest: (items) => {}
});

export const FilterContextProvider = (props) => {
  const items = [ {
    language: "French",
    age: 18
  },
  {
    language: "German",
    age: 46
  },
  {
    language: "Italian",
    age: 76
  },
  {
    language: "Italian",
    age: 56
  }]
  const [currentFilter, setCurrentFilter] = useState([
  ])
  const [filteredItems, setFilteredItems] = useState([
  ])

  const filterHandler = (language) => {
    setFilteredItems((prev) => (
      items.filter((item) => item.language === language)
    ))
  }

  const context = {
    filter: currentFilter,
    items: items,
    filteredItems: filteredItems,
    handleTest: filterHandler
  };

  return (
    <FilterContext.Provider value={context}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContext
