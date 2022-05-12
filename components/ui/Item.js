import classes from "./item.module.scss";
import Card from "./card";
import { useContext, useState } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Button from "./button";
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ItemDetails from "./ItemDetails";

const Item = (props) => {
  const { info } = props;
  const [detailsOpen, setdetailsOpen] = useState(false)
  const bookmarksCtx = useContext(BookmarksContext)
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(info._id)

  const toggleBookmarkHandler = (event) => {
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(info._id);
      // bookmarksCtx.removeBookmarkFromDb(info._id)
    } else {
      bookmarksCtx.addBookmark({
        ...{ info },
        key: info._id,
        _id: info._id,
        category: info.category,
        title: info.title,
        location: info.location,
        isBookmarked: info.isBookmarked,
      });
    }
  };

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
          <h3>{info.title}</h3>
          <div className={classes.language}>
            <TranslateIcon/>
            <p>{info.language}</p>
          </div>
          <div
            className={`${classes.bookmarkIcon} ${itemIsBookmarked ? classes.active : null}`}
            onClick={toggleBookmarkHandler}>
            {itemIsBookmarked ? <BookmarkIcon/> : <BookmarkBorderIcon/>}
          </div >
          <div className={classes.details} onClick={toggleDetailsHandler}>
            <h4>Details</h4>
            { detailsOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          </div>
          <div className={`${classes.detailsShow} ${detailsOpen ? classes.active : null}`}>
            <ItemDetails language={info.language} contact={info.contact} studentAge={info.studentAge}/>
          </div>
        </div>
      </Card>

  );
};

export default Item;
