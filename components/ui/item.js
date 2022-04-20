import classes from "./item.module.css";
import Card from "./card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";

const Item = (props) => {
  const { info } = props;
  const bookmarksCtx = useContext(BookmarksContext)
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(info.id)

  const toggleBookmarkHandler = (event) => {
    console.log(bookmarksCtx.totalBookmarks);
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(info.id)
    } else {
      bookmarksCtx.addBookmark({
        // id: props.id,
        // title: props.title,
        // location: props.location,
        // category: props.category,
        // tutor: props.tutor,
        // language: props.language,
        // contact: props.contact,
        // studentAge: props.studentAge
        key: info.id,
        id: info.id,
        category: info.category,
        title: info.title,
        location: info.location,
        ...{info}
      })
    }
    // props.onBookmark()
    // console.log(props.itemIsBookmarked );
  };

  // const suka = (event) => {
  //   event.preventDefault()
  //   console.log(itemIsBookmarked);
  // }

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
