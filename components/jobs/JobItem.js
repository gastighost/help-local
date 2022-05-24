import classes from "./JobItem.module.scss";
import Link from "next/link";
import Card from "../ui/card";
import Button from "../ui/button";
import JobItemDetails from './JobItemDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import TranslateIcon from '@material-ui/icons/Translate';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarksContext from "../../store/BookmarksContext";
import { useContext, useState } from "react";

function JobItem(props) {
  const { job } = props;
  const [detailsOpen, setdetailsOpen] = useState(false)
  const bookmarksCtx = useContext(BookmarksContext);
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(job._id);

  const toggleBookmarkHandler = (event) => {
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(job._id);
    } else {
      bookmarksCtx.addBookmark(job)
    }
  }

  const toggleDetailsHandler = () => {
    if (detailsOpen === false) {
      setdetailsOpen(true)
    } else {
      setdetailsOpen(false)
    }
  }

  return (
    <Card>
      <div className={classes.content}>
        <h3>Title: {props.job.title}</h3>
        <div className={classes.language}>
            <TranslateIcon/>
            <p>{job.language}</p>
          </div>
        <div
          className={`${classes.bookmarkIcon} ${itemIsBookmarked ? classes.active : null}`}
          onClick={toggleBookmarkHandler}>
          {itemIsBookmarked ? <BookmarkIcon/> : <BookmarkBorderIcon/>}
        </div>
        <div className={classes.details} onClick={toggleDetailsHandler}>
          <h4>Details</h4>
          { detailsOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </div>
        <div className={`${classes.detailsShow} ${detailsOpen ? classes.active : null}`}>
          <JobItemDetails job={job}/>
        </div>
      </div>
      {/* <div className={classes.actions}>
        <button>
          <Link href={`/${props.type}/${props.job._id}`}>Open</Link>
        </button>
      </div> */}
    </Card>
  );
}

export default JobItem;
