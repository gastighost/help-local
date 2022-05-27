import classes from "./aid-item.module.scss";
import Card from "../ui/card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

const AidItem = (props) => {
  const { info } = props;

  const bookmarksCtx = useContext(BookmarksContext);
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(info._id);

  const toggleBookmarkHandler = (event) => {
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(info._id);
    } else {
      bookmarksCtx.addBookmark({
        ...info,
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
        <div className={classes.items}>
          <LocalHospitalIcon />
          <p>
            {info.category} • {info.amount}{" "}
            {info.measurement && info.measurement}
          </p>
        </div>
        <div
          className={`${classes.bookmarkIcon} ${
            itemIsBookmarked ? classes.active : null
          }`}
          onClick={toggleBookmarkHandler}
        >
          {itemIsBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </div>

        <Link href={`/${props.type}/${info._id}`}>
          <div className={classes.details}>
            <h4>Click for more details</h4>
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default AidItem;
