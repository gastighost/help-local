import classes from "./item.module.css";
import Card from "./card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";

const Item = (props) => {

  const { info } = props;
  // console.log(props.itemIsBookmarked);
  // console.log(props.type);
  const bookmarksCtx = useContext(BookmarksContext)
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(info._id)

  const toggleBookmarkHandler = (event) => {
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(info._id)
      // bookmarksCtx.removeBookmarkFromDb(info._id)
    } else {
      bookmarksCtx.addBookmark({
        ...{info},
        key: info._id,
        _id: info._id,
        category: info.category,
        title: info.title,
        location: info.location,
      })
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h2>{info.category}</h2>
          <h3>{info.title}</h3>
          <address>{info.location}</address>
        </div>
        <div className={classes.actions}>
          <button>
            <Link href={`/${info.type}/${info._id}`}>Open</Link>
          </button>
          <button onClick={toggleBookmarkHandler}>
            {itemIsBookmarked ? "Remove from bookmarks" : "Bookmark!"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default Item;
