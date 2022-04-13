import classes from "./card.module.css";


function Card(props) {
  return (
    <div className={classes.card}>
      <li >
        {props.children}
      </li>
    </div>
  )
}

export default Card
