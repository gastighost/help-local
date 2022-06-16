import classes from './listInfo.module.scss'
import Button from './button'
import NewEducationForm from '../education/NewEducationForm'
import CategoryFilterBar from './filter-bar'
import ItemFilter from './items-filter'
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export default function ListInfo( { openModal, newEducationModalIsOpen, closeModal, description } ) {

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h3>Education</h3>
          <div className={classes.buttonWrapper} onClick={openModal}>
            <div>Create</div>
            <div className={classes.icon}>
              <ControlPointIcon/>
            </div>
          </div>
      </div>
      <div className={classes.description}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nisi officia beatae officiis eos modi dolore assumenda ratione praesentium sequi.</p>
      </div>
      <ItemFilter/>
      <div>
        {newEducationModalIsOpen && <NewEducationForm onCancel={closeModal}/>}
      </div>
  </div>
  )
}
