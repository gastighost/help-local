import classes from './Filters.module.scss'
import { useState, useEffect, useContext } from "react";
import FilterContext from "../../store/FilterContext"

export default function Filters({items, active}) {
  // Returning unique languages from the items array
  const uniqueLanguages = items.map(item => item.language)
  .filter((value, index, self) => self.indexOf(value) === index)

  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedAge, setSelectedAge] = useState("")
  const [selected, setSelected] = useState(false)
  const filterCtx = useContext(FilterContext)

  console.log(selected);
// Triggering filter when user changes selected language
useEffect(() => {
  filterCtx.handleTest(selectedLanguage)
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
