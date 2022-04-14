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
          <li>
            <Link href='/auth'>Login</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
