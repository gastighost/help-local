import { createContext, useState, useEffect } from "react";

const FilterContext = createContext({
  filteredItems: [],
  allItems: [],
  activeLanguage: "",
  activeAge: "",
  allItemsHandler: (items) => {},
  filterAll: (items) => {},
  setActiveLanguageHandler: (language) => {},
  setActiveAgeHandler: (age) => {},
  filteredByLanguage: (language) => {},
  filteredByAge: (language) => {}
});

export const FilterContextProvider = (props) => {
  const [allItems, setAllItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([
  ])
  const [activeLanguage, setActiveLanguage] = useState("")
  const [activeAge, setActiveAge] = useState("")

  const setActiveLanguageHandler = (language) => {
    setActiveLanguage(language)
  }

  const setActiveAgeHandler = (age) => {
    setActiveAge(age)
  }

  const allItemsHandler = (items) => {
    setAllItems(items)
  }

  const filterAll = (items) => {
    setFilteredItems(items)
  }

  const filteredByLanguage = (language) => {
    !activeAge ? setFilteredItems(allItems.filter((item) => item.language === language)) : setFilteredItems(allItems.filter((item) => item.language === language && item.studentAge === parseInt(activeAge)))
  }

  const filteredByAge = (age) => {
    !activeLanguage ? setFilteredItems(allItems.filter((item) => item.studentAge === parseInt(age))) : setFilteredItems(allItems.filter((item) => item.language === activeLanguage && item.studentAge === parseInt(age)))
}

  const context = {
    filteredItems: filteredItems,
    allItems: allItems,
    activeLanguage: activeLanguage,
    activeAge: activeAge,
    allItemsHandler: allItemsHandler,
    setActiveLanguageHandler: setActiveLanguageHandler,
    setActiveAgeHandler: setActiveAgeHandler,
    filterAll: filterAll,
    filteredByLanguage: filteredByLanguage,
    filteredByAge: filteredByAge
  };

  return (
    <FilterContext.Provider value={context}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContext
