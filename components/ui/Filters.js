import classes from './Filters.module.scss'
import { useState, useEffect, useContext } from "react";
import FilterContext from "../../store/FilterContext"

export default function Filters({items, active}) {
  const [selectedLanguage, setSelectedLanguage] = useState()
  const [selectedAge, setSelectedAge] = useState()
  const [selected, setSelected] = useState(false)
  const [languageIsSelected, setLanguageIsSelected] = useState(false)
  const [ageIsSelected, setAgeIsSelected] = useState(false)
  const [filterState, setFilterState] = useState([])
  // Connecting to our Context API
  const filterCtx = useContext(FilterContext)
  const filteredItems = filterCtx.filteredItems
  // console.log(filterCtx.selected)
  // console.log(filterCtx.filter, filterCtx.filter.length)
  console.log("language selected?", languageIsSelected)
  console.log("age selected?", ageIsSelected)
  console.log(typeof(selectedLanguage), selectedLanguage)
  console.log(typeof(selectedAge), selectedAge)
  console.log("filterCtx.selected", filterCtx.selected)

  // Returning unique languages from the items array
  const uniqueLanguages = items.map(item => item.language)
  .filter((value, index, self) => self.indexOf(value) === index)

//  Changing the state of selected in the Ctx when selected changes
  useEffect(() => {
    // !languageIsSelected && !ageIsSelected ? filterCtx.selectedHandler(false) : filterCtx.selectedHandler(true)
    if (languageIsSelected || ageIsSelected) {
      filterCtx.selectedHandler(true)
    } else filterCtx.selectedHandler(false)

    if (languageIsSelected && ageIsSelected) {
      filterCtx.filterbyLanguageAndAge(selectedLanguage, selectedAge)
    } else if (languageIsSelected && !ageIsSelected) {
      filterCtx.filterHandler(selectedLanguage)
    } else if (!languageIsSelected && ageIsSelected) {
      filterCtx.filterHandler(selectedAge)
    }
  }, [languageIsSelected, ageIsSelected])

// Triggering filter when user changes selected language
  useEffect(() => {
    filterCtx.filterHandler(selectedLanguage)
  }, [selectedLanguage])

  // Triggering filter when user changes selected age
  useEffect(() => {
    filterCtx.filterByAgeHandler(selectedAge)
  }, [selectedAge])

// Changing the state of selectedLanguage on user's click
  const toggleSelectLanguageHandler = (e) => {
    const language = e.target.textContent
    const key = language
    if (languageIsSelected && language === selectedLanguage) {
      setLanguageIsSelected(false)
      setSelectedLanguage()
    } else {
      setLanguageIsSelected(true)
      setSelectedLanguage(language)
    }
  }

  const toggleSelectAgeHandler = (e) => {
    const age = e.target.textContent
    const key = age
    if (ageIsSelected && age === selectedAge) {
      setAgeIsSelected(false)
      setSelectedAge()
    } else {
      setAgeIsSelected(true)
      setSelectedAge(age)
    }
  }

  const ages = ["23", "34", "67"]

  return (
    <div className={`${classes.container} ${active && classes.active}`}>
      <div className={classes.content}>
        <div className={classes.info}>
          <div className={classes.filterContainer}>
            <div className={classes.filterItem}>
            <div>
              <h4>Language:</h4>
            </div>
            <div className={classes.filterList}>
              {uniqueLanguages.map(language => (
                <p
                  key={language}
                  className={`${languageIsSelected && selectedLanguage === language ? classes.selected : null}`}
                  onClick={toggleSelectLanguageHandler}>{language}</p>
              ))}
            </div>
            </div>
            <div className={classes.filterItem}>
            <div>
              <h4>Age:</h4>
            </div>
            <div className={classes.filterList}>
              {ages.map(age => (
                <p
                key={age}
                className={`${ageIsSelected && selectedAge === age ? classes.selected : null}`}
                onClick={toggleSelectAgeHandler}>{age}</p>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
