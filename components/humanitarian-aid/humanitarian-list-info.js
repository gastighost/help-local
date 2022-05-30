import classes from "./humanitarian-list-info.module.scss";
import HumanitarianAidForm from "./humanitarian-aid-form";
import ItemFilter from "../ui/items-filter";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

export default function HumanitarianListInfo({
  openModal,
  newAidModalIsOpen,
  closeModal,
  session,
}) {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h3>Humanitarian Aid</h3>
        {session && (
          <div className={classes.buttonWrapper} onClick={openModal}>
            <div>Create</div>
            <div className={classes.icon}>
              <ControlPointIcon />
            </div>
          </div>
        )}
      </div>
      <div className={classes.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nisi
          officia beatae officiis eos modi dolore assumenda ratione praesentium
          sequi.
        </p>
      </div>
      <ItemFilter />
      <div>
        {newAidModalIsOpen && <HumanitarianAidForm onCancel={closeModal} />}
      </div>
    </div>
  );
}
