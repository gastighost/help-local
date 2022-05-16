import classes from './itemFilter.module.scss'
import FilterListIcon from '@material-ui/icons/FilterList';

export default function ItemsFilter(props) {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <p>Sort by:</p>
        <select className={classes.select}>
          <option className={classes.option}>Show All</option>
          <option className={classes.option}>By Language</option>
          <option className={classes.option}>By Location</option>
        </select>
      </div>
      <div className={classes.right}>
        <FilterListIcon/>
      </div>
    </div>
  )
}
