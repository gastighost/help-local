import classes from './itemDetails.module.scss'
import Button from './button'

export default function ItemDetails( { language, contact, studentAge } ) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.info}>
          <h4>Language:</h4>
          <p>{language}</p>
        </div>
        <div className={classes.info}>
          <h4>Contact details:</h4>
          <p>{contact}</p>
        </div>
        <div className={classes.info}>
          <h4>Age group:</h4>
          <p>{studentAge}</p>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes.btn}>Get in touch</button>
      </div>
    </div>
  )
}
