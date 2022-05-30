import classes from './itemFilter.module.scss'
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Fragment, useContext, useState } from "react";
import FilterContext from "../../store/FilterContext"
import Filters from './Filters';

export default function ItemsFilter(props) {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const filterCtx = useContext(FilterContext)
  const test = filterCtx.filter
  console.log(filterCtx.filteredItems);


  const handleTest = () => {
    filterCtx.handleTest(test)
    console.log(filterCtx.filteredItems);
  }

  const toggleDetailsHandler = () => {
    if (filtersOpen === false) {
      setFiltersOpen(true)
    } else {
      setFiltersOpen(false)
    }
  }

  return (
    <Fragment>
    <div className={classes.container}>
      <div className={classes.left}>
        <p>Sort by:</p>
        {filtersOpen ? <ExpandLessIcon onClick={toggleDetailsHandler}/> : <ExpandMoreIcon onClick={toggleDetailsHandler}/>}
        {/* <select className={classes.select}>
          <option className={classes.option}>Show All</option>
          <option className={classes.option}>By Language</option>
          <option className={classes.option}>By Location</option>
        </select> */}
      </div>
      <div className={classes.right}>
        <FilterListIcon/>
      </div>
    </div>
      <Filters
          items={filterCtx.allItems}
          active={filtersOpen}/>
    </Fragment>
  )
}
