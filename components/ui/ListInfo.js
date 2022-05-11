import classes from './listInfo.module.scss'
import Button from './button'
import NewEducationForm from '../education/NewEducationForm'
import CategoryFilterBar from './filter-bar'
import ItemFilter from './itemFilter'

export default function ListInfo( { openModal, newEducationModalIsOpen, closeModal, description } ) {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h3>Education</h3>
        <div>
          <Button onClick={openModal}>Create</Button>
        </div>
      </div>
      <div className={classes.description}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nisi officia beatae officiis eos modi dolore assumenda ratione praesentium sequi.</p>
      </div>
      <div>
        {newEducationModalIsOpen && <NewEducationForm onCancel={closeModal}/>}
      </div>
      {/* <ItemFilter/> */}
  </div>
  )
}
