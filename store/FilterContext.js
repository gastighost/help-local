import { createContext, useState, useEffect } from "react";

const FilterContext = createContext({
  filteredItems: [],
  allItems: [],
  activeLanguage: "",
  activeLocation: "",
  allItemsHandler: (items) => {},
  filterAll: (items) => {},
  setActiveLanguageHandler: (language) => {},
  setActiveLocationHandler: (location) => {},
  filteredByLanguage: (language) => {},
  filteredByLocation: (location) => {}
});

export const FilterContextProvider = (props) => {

  //States:
  const [allItems, setAllItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([
  ])
  const [activeLanguage, setActiveLanguage] = useState("")
  const [activeLocation, setActiveLocation] = useState("")

  // Handlers changing the state (receiving requests from Filters.js):
  const setActiveLanguageHandler = (language) => {
    setActiveLanguage(language)
  }

  const setActiveLocationHandler = (location) => {
    setActiveLocation(location)
  }

  const allItemsHandler = (items) => {
    setAllItems(items)
  }

  const filterAll = (items) => {
    setFilteredItems(items)
  }

  // Handlers with the filtering function (receiving requests from ItemsList.js):
  const filteredByLanguage = () => {
    !activeLocation ? setFilteredItems(allItems.filter((item) => item.language === activeLanguage)) : setFilteredItems(allItems.filter((item) => item.language === activeLanguage && item.location === activeLocation))
  }

  const filteredByLocation = () => {
!activeLanguage ? setFilteredItems(allItems.filter((item) => item.location === activeLocation)) : setFilteredItems(allItems.filter((item) => item.language === activeLanguage && item.location === activeLocation))
}

  const context = {
    filteredItems: filteredItems,
    allItems: allItems,
    activeLanguage: activeLanguage,
    activeLocation: activeLocation,
    allItemsHandler: allItemsHandler,
    setActiveLanguageHandler: setActiveLanguageHandler,
    setActiveLocationHandler: setActiveLocationHandler,
    filterAll: filterAll,
    filteredByLanguage: filteredByLanguage,
    filteredByLocation: filteredByLocation
  };

  return (
    <FilterContext.Provider value={context}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterContext

// !activeLanguage ? setFilteredItems(allItems.filter((item) => item.studentAge === parseInt(age))) : setFilteredItems(allItems.filter((item) => item.language === activeLanguage && item.studentAge === parseInt(age)))
