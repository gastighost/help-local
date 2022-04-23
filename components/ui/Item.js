import classes from "./item.module.css";
import Card from "./card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";
import EducationItem from "../education/EducationItem";

const Item = (props) => {
  const { info } = props;

  console.log(props.itemIsBookmarked);
  console.log(props.type);
  const bookmarksCtx = useContext(BookmarksContext);
  const itemIsBookmarked = props.isBooked;
  console.log(info);

  const toggleBookmarkHandler = (event) => {
    info.map((item) => {
      if (item.IsBookmarked) {
        bookmarksCtx.removeBookmark(item._id);
        // bookmarksCtx.removeBookmarkFromDb(info._id)
      } else {
        bookmarksCtx.addBookmark({
          ...{ item },
          key: item._id,
          _id: item._id,
          category: item.category,
          title: item.title,
          location: item.location,
          isBookmarked: item.isBookmarked,
        });
      }
    });
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
            <Link href={`/${props.type}/${info._id}`}>Open</Link>
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
