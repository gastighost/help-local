import classes from './JobListInfo.module.scss';
import JobsForm from './jobs-form';
import Card from '../ui/card';
// import CategoryFilterBar from './filter-bar'
// import ItemFilter from './items-filter'
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export default function JobListInfo( { openModal, newJobModalIsOpen, closeModal, description } ) {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h3>Jobs</h3>
          <div className={classes.buttonWrapper} onClick={openModal}>
            <div>Create</div>
            <div className={classes.icon}>
              <ControlPointIcon/>
            </div>
          </div>
      </div>
      <div className={classes.description}>
        <p>Find jobs around you.</p>
      </div>
      {/* <ItemFilter/> */}
      <div>
          {newJobModalIsOpen && (
            <div className={classes.backdrop}>
              <Card className={classes.modal}>
                <JobsForm onCancel={closeModal}/>
              </Card>
            </div>
            )}
      </div>
  </div>
  )
}
