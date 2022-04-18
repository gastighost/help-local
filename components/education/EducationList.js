import EducationItem from "./EducationItem";
import classes from "./EducationList.module.css";

function EducationList(props) {
  const { info } = props;

  return <ul className={classes.list}>
    {info.map((sale) => {
      return <EducationItem key={sale.id} info={sale}/>
    })}
  </ul>
}

export default EducationList
