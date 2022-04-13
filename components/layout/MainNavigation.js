import classes from './MainNavigation.module.css';
import Link from 'next/link';


function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <h2 className={classes.link}>Help Local</h2>
        </Link>
      </div>
      <nav>
        <ul>
          {/* <li>
            <Link href='/'></Link>
          </li> */}
          {/* <li>
            // <Link href='../new-movie'>Add New Movie</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
