import classes from './SubNavigation.module.scss';
import Link from 'next/link';

function SubNavigation() {
  
  return (
    <footer>
      <nav className={classes.footer}>
        <Link href="/">
          <div className={classes.icons}>
            <img src='/home-icon.svg' alt='Home Icon' />
            <p className={classes.text}>Home</p>
          </div>
        </Link>
        <Link href="/jobs">
          <div className={classes.icons}>
            <img src='/hourglass-icon.svg' alt='Hourglass Icon' />
            <p className={classes.text}>Jobs</p>
          </div>
        </Link>
        <Link href="/education">
          <div className={classes.icons}>
            <img src='/glasses-icon.svg' alt='Glasses Icon' />
            <p className={classes.text}>Education</p>
          </div>
        </Link>
        <Link href="/humanitarian-aid">
          <div className={classes.icons}>
            <img src='/box-icon.svg' alt='Box Icon' />
            <p className={classes.text}>Supplies</p>
          </div>
        </Link>
        <Link href="/social-media">
          <div className={classes.icons}>
            <img src='/people-icon.svg' alt='People Icon' />
            <p className={classes.text}>Groups</p>
          </div>
        </Link>
      </nav>
    </footer>
  );
}

export default SubNavigation;
