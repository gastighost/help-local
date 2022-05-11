import classes from "./item.module.scss";
import Card from "./card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Button from "./button";

const Item = (props) => {
  const { info } = props;
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

  return (

      <Card>
        <div className={classes.content}>
          <h3>{info.title}</h3>
          <p>{info.category}</p>
          <div className={classes.bookmarkIcon} onClick={toggleBookmarkHandler}>
            {itemIsBookmarked ? <BookmarkIcon/> : <BookmarkBorderIcon/>}
          </div>
        <div className={classes.actions}>
          <Button>
            <Link href={`/${props.type}/${info._id}`}>Open</Link>
          </Button>
        </div>
        </div>
      </Card>

  );
};

export default Item;
