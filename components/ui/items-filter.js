import classes from './itemFilter.module.scss'
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Fragment, useContext, useState } from "react";
import FilterContext from "../../store/FilterContext"
import Filters from './Filters';

export default function ItemFilter (props) {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const filterCtx = useContext(FilterContext)

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
        <p>Filter by:</p>
        {filtersOpen ? <ExpandLessIcon onClick={toggleDetailsHandler}/> : <ExpandMoreIcon onClick={toggleDetailsHandler}/>}
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
