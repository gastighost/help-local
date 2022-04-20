import EducationItem from "./EducationItem";
import classes from "./EducationList.module.css";
import ItemsList from "../ui/items-list";

function EducationList(props) {
  const { info } = props;

  return (
    <ul className={classes.list}>
      {info.map((item) => {
        return <ItemsList key={item.id} info={info} />;
      })}
    </ul>
  );
}

export default EducationList;
