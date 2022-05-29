import classes from './Filters.module.scss'
import { useState, useEffect, useContext } from "react";
import FilterContext from "../../store/FilterContext"

export default function Filters({items, active}) {
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedAge, setSelectedAge] = useState("")
  const [selected, setSelected] = useState(false)

  const filterCtx = useContext(FilterContext)



useEffect(() => {
  filterCtx.handleTest(selectedLanguage)
}, [selectedLanguage])


  const toggleSelectLanguageHandler = (e) => {
    if (selected === false) {
      setSelected(true)
    } else {
      setSelected(false)
    }
    setSelectedLanguage(e.target.textContent)
    console.log(filterCtx.filteredItems);
  }

  // const toggleSelectAgeHandler = (e) => {
  //   console.log(e.target.textContent);
  //   setSelectedAge(e.target.textContent)
  //   if (selected === false) {
  //     setSelected(true)
  //   } else {
  //     setSelected(false)
  //   }
  // }

  return (
    <div className={`${classes.container} ${active && classes.active}`}>
      <div className={classes.content}>
        <div className={classes.info}>
          <h4>Language:</h4>
          {items.map(item => (
            <p
              className={`${selected && selectedLanguage === item.language ? classes.selected : null}`}
              onClick={toggleSelectLanguageHandler}>{item.language}</p>
          ))}
        </div>
        {/* <div className={classes.info}>
          <h4>Age:</h4>
          {items.map(item => (
            <p
              className={`${selectedAge === item.age && classes.selected}`}
              onClick={toggleSelectAgeHandler}>{item.age}</p>
          ))}
        </div> */}
      </div>
    </div>
  )
}
