import classes from './MainNavigation.module.scss';
import Link from 'next/link';
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import { useSession, signOut } from 'next-auth/client';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

            <Link href='/bookmarks'><BookmarkBorderIcon className={classes.topbarIcon}/>
            </Link>
          </li>
              <span className={classes.badge}>{bookmarksCtx.totalBookmarks}</span>
          {!session && !loading && (
            <li>
              <Link href="/auth"><AccountCircleIcon className={classes.topbarIcon}/></Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/"><LanguageIcon className={classes.topbarIcon}/></Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler} className={classes.button}><ExitToAppIcon/></button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
