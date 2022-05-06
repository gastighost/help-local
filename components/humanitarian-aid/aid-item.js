import styles from "./aid-item.module.css";
import Card from "../ui/card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";

const AidItem = (props) => {
  const { info } = props;

  // console.log(props.id);
  const bookmarksCtx = useContext(BookmarksContext);
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(props.id);
  // console.log(props.isBookmarked);

  const toggleBookmarkHandler = (event) => {
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(props.id);
    } else {
      bookmarksCtx.addBookmark({
        ...{ props },
        key: props.id,
        _id: props.id,
        category: props.category,
        title: props.title,
        location: props.location,
        isBookmarked: props.isBookmarked,
      });
    }
    // console.log(itemIsBookmarked);
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.content}>
          <h2>{info.title}</h2>
          <h3>
            {info.category} • {info.amount}{" "}
            {info.measurement && info.measurement}
          </h3>
        </div>
        <div className={styles.actions}>
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

export default AidItem;
