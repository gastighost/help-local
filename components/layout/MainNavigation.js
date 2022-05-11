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
      <div>
        <Link href="/">
          <div className={classes.fullLogo}>
            <img src='/main-icon.svg' alt='Help Local Icon' className={classes.logo}/>
            <h4><span className={classes.logoBlue}>Help</span><span className={classes.logoYellow}>Local</span></h4>
          </div>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
              <Link href='/bookmarks'><img src='/bookmark-icon.svg' alt='Bookmarks Icon' className={classes.topbarIcon} /></Link>
          </li>
          {session &&  (
            <li>
              <Link href="/"><img src='/language-icon.svg' alt='Language Icon' className={classes.topbarIcon} /></Link>
            </li>
          )}
          {!session && (
            <li>
              <Link href="/auth"><img src='/user-icon.svg' alt='User Icon' className={classes.topbarIcon} /></Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler} className={classes.button}><img src='/user-icon.svg' alt='User Icon' className={classes.topbarIcon} /></button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
