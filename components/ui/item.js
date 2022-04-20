import classes from "./item.module.css";
import Card from "./card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";

const Item = (props) => {

  const { info } = props;
  console.log(info);
  const bookmarksCtx = useContext(BookmarksContext)
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(info._id)

  const toggleBookmarkHandler = (event) => {
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(info._id)
    } else {
      bookmarksCtx.addBookmark({
        key: info._id,
        _id: info._id,
        category: info.category,
        title: info.title,
        location: info.location,
        ...{info}
      })
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h2>{props.category}</h2>
          <h3>{props.title}</h3>
          <address>{props.location}</address>
        </div>
        <div className={classes.actions}>
          <button>
            <Link href={`/${props.type}/${props.id}`}>Request!</Link>
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
