import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';

function MainNavigation() {
  const [session, loading] = useSession();

  function logoutHandler(){
    signOut();
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <h2><span className={classes.logoBlue}>Help</span><span className={classes.logoYellow}>Local</span></h2>
        </Link>
      </div>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler} className={classes.button}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
