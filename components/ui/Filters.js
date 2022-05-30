import classes from './Filters.module.scss'
import { useState, useEffect, useContext } from "react";
import FilterContext from "../../store/FilterContext"

export default function Filters({items, active}) {
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedAge, setSelectedAge] = useState("")
  const [selected, setSelected] = useState(false)
  // Connecting to our Context API
  const filterCtx = useContext(FilterContext)
  const filteredItems = filterCtx.filteredItems
  console.log(filterCtx.selected)

  // Returning unique languages from the items array
  const uniqueLanguages = items.map(item => item.language)
  .filter((value, index, self) => self.indexOf(value) === index)

 // Changing the state of selected in the Ctx when selected changes
  useEffect(() => {
    filterCtx.selectedHandler(selected)
  }, [selected])

// Triggering filter when user changes selected language
  useEffect(() => {
    filterCtx.filterHandler(selectedLanguage)
  }, [selectedLanguage])

// Changing the state of selectedLanguage on user's click
  const toggleSelectLanguageHandler = (e) => {
    const language = e.target.textContent
    setSelectedLanguage(language)
    if (selected && language === selectedLanguage) {
      setSelected(false)
    } else {
      setSelected(true)
    }
  }

  return (
    <div className={`${classes.container} ${active && classes.active}`}>
      <div className={classes.content}>
        <div className={classes.info}>
          <h4>Language:</h4>
          {uniqueLanguages.map(language => (
            <p
              key={language}
              className={`${selected && selectedLanguage === language ? classes.selected : null}`}
              onClick={toggleSelectLanguageHandler}>{language}</p>
          ))}
        </div>
      </div>
      {/* <div className={classes.actions}>
        <button className={classes.btn}>Search</button>
      </div> */}
    </div>
  )
}
