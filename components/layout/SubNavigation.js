import classes from './SubNavigation.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useWindowDimensions from '../hooks/useWindowDimensions';

function SubNavigation() {
  const { route } = useRouter()
  const { height, width } = useWindowDimensions();

  if (width < 600) {
    return (
      <footer>
        <nav className={classes.mobilefoot}>
          <Link href="/">
            <div className={classes.icons}>
              <img
                src={
                  route === '/' ?
                  '/home-active.svg' :
                  '/home-inactive.svg'
                }
                alt='Home Icon'
              />
              <p className={classes.text}>Home</p>
            </div>
          </Link>
          <Link href="/jobs">
            <div className={classes.icons}>
              <img
                src={
                route === '/jobs' ?
                '/hourglass-active.svg' :
                '/hourglass-inactive.svg'
                }
                alt='Hourglass Icon'
              />
              <p className={classes.text}>Jobs</p>
            </div>
          </Link>
          <Link href="/education">
            <div className={classes.icons}>
              <img
                src={ route === '/education' ?
                '/glasses-active.svg' :
                '/glasses-inactive.svg'}
                alt='Glasses Icon'
              />
              <p className={classes.text}>Education</p>
            </div>
          </Link>
          <Link href="/humanitarian-aid">
            <div className={classes.icons}>
              <img
                src={ route === '/humanitarian-aid' ?
                '/box-active.svg' :
                '/box-inactive.svg'}
                alt='Box Icon'
              />
              <p className={classes.text}>Supplies</p>
            </div>
          </Link>
          <Link href="/social-media">
            <div className={classes.icons}>
              <img
                src={ route === '/social-media' ?
                '/people-active.svg' :
                '/people-inactive.svg'}
                alt='People Icon'
              />
              <p className={classes.text}>Groups</p>
            </div>
          </Link>
        </nav>
      </footer>
    );
  } else {
    return (
      <div className={classes.webfoot}>
        <footer>
          <p className={classes.titlefoot}>Help Local</p>
        </footer>
      </div>
    )
  }
}

export default SubNavigation;
