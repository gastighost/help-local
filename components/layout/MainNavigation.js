import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import { useSession, signOut } from 'next-auth/client';

function MainNavigation() {
  const bookmarksCtx = useContext(BookmarksContext)
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
        <li>
            <Link href='/bookmarks' >Bookmarks
            </Link>
              <span className={classes.badge}>{bookmarksCtx.totalBookmarks}</span>
          </li>
          <li>
            <Link href='/auth'>Login</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
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
