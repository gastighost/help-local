import AidItem from "./aid-item";
import classes from "./aid-item-list.module.scss";

const AidItemList = (props) => {
  const { info } = props;
  return (
    <div className={classes.itemListContainer}>
      <div className={classes.list}>
        {info.map((item) => (
          <AidItem key={item._id} type={props.type} info={item} />
        ))}
      </div>
    </div>
  );
};

export default AidItemList;
