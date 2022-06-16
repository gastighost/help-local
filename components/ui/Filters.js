import classes from './Filters.module.scss'
import { useContext } from "react";
import FilterContext from "../../store/FilterContext"

export default function Filters({items, active}) {
  // Connecting to our Context API
  const filterCtx = useContext(FilterContext)
  const filteredItems = filterCtx.filteredItems

  // Returning unique languages & locations from the items array
    const uniqueLanguages = filteredItems.map(item => item.language)
  .filter((value, index, self) => self.indexOf(value) === index)

  const uniqueLocations = filteredItems.map(item => item.location)
  .filter((value, index, self) => self.indexOf(value) === index)

  // Handlers changing the state of the language and location in the Context API
  const toggleSelectLanguageHandler = (e) => {
    const language = e.target.textContent
    filterCtx.activeLanguage === language ? filterCtx.setActiveLanguageHandler("") : filterCtx.setActiveLanguageHandler(language)
  }

  const toggleSelectLocationHandler = (e) => {
    const location = e.target.textContent
    filterCtx.activeLocation === location ? filterCtx.setActiveLocationHandler("") : filterCtx.setActiveLocationHandler(location)
  }

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
                  className={`${filterCtx.activeLanguage === language ? classes.selected : null}`}
                  onClick={toggleSelectLanguageHandler}
                  >{language}</p>
              ))}
            </div>
            </div>
            <div className={classes.filterItem}>
            <div>
              <h4>Location:</h4>
            </div>
            <div className={classes.filterList}>
            {uniqueLocations.map(location => (
                <p
                key={location}
                className={`${filterCtx.activeLocation === location ? classes.selected : null}`}
                onClick={toggleSelectLocationHandler}
                >{location}</p>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
