import classes from './itemFilter.module.scss'
import "../../public/icons/triangle.png"

export default function itemFilter() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <p>Showing</p>
        <select>
          <option>All categories</option>
          <option>category 1</option>
          <option>category 2</option>
        </select>
      </div>
      <div className={classes.right}>
        <h2>Hola</h2>
        <img src="public/Triangle.png" alt="" />
      </div>
    </div>
  )
}
