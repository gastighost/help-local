import classes from './JobItemDetails.module.scss';
import Button from '../ui/button';
import Link from 'next/link';

const JobItemDetails = (props) => {
  const { job } = props;
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.info}>
          <h4>Category:</h4>
          <p>{job.category}</p>
        </div>
        <div className={classes.info}>
          <h4>Company:</h4>
          <p>{job.company}</p>
        </div>
        <div className={classes.info}>
          <h4>Description:</h4>
          <p>{job.description}</p>
        </div>
        <div className={classes.info}>
          <h4>Monthly Salary:</h4>
          <p>{job.monthlySalary} €</p>
        </div>
      </div>
      <div className={classes.actions}>
        {/* <button className={classes.btn}>Get in touch</button> */}
        <Button>
          <Link href={`/jobs/${job._id}`}>
            More details
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default JobItemDetails;
