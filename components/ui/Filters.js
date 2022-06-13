import classes from './Filters.module.scss'
import { useState, useEffect, useContext } from "react";
import FilterContext from "../../store/FilterContext"

export default function Filters({items, active}) {
  // Connecting to our Context API
  const filterCtx = useContext(FilterContext)
  const filteredItems = filterCtx.filteredItems

  // Returning unique languages from the items array
  const uniqueLanguages = items.map(item => item.language)
  .filter((value, index, self) => self.indexOf(value) === index)

  const uniqueLocations = items.map(item => item.location)
  .filter((value, index, self) => self.indexOf(value) === index)

  const toggleSelectLanguageHandler = (e) => {
    const language = e.target.textContent
    const key = language
    filterCtx.activeLanguage === language ? filterCtx.setActiveLanguageHandler("") : filterCtx.setActiveLanguageHandler(language)
  }

  const toggleSelectAgeHandler = (e) => {
    const age = e.target.textContent
    // console.log(typeof(age), age)
    const key = age
    filterCtx.activeAge === age ? filterCtx.setActiveAgeHandler("") : filterCtx.setActiveAgeHandler(age)
  }
  console.log(filterCtx.activeLanguage, typeof filterCtx.activeLanguage)
  console.log(filterCtx.activeAge)

  const ages = ["34", "67", "23"]

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
              <h4>Age:</h4>
            </div>
            <div className={classes.filterList}>
              {ages.map(age => (
                <p
                key={age}
                className={`${filterCtx.activeAge === age ? classes.selected : null}`}
                onClick={toggleSelectAgeHandler}
                >{age}</p>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
