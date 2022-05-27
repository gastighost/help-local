import styles from "./aid-item.module.css";
import Card from "../ui/card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";

const AidItem = (props) => {
  const { info } = props;

  const bookmarksCtx = useContext(BookmarksContext);
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(props.id);

  const toggleBookmarkHandler = (event) => {
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(props.id);
    } else {
      bookmarksCtx.addBookmark({
        ...{ props },
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
    <li className={styles.item}>
      <Card>
        <div className={styles.content}>
          <div>
            <h2>{info.title}</h2>
            <h3>
              {info.category} • {info.amount}{" "}
              {info.measurement && info.measurement}
            </h3>
          </div>
          <div>
            <button onClick={toggleBookmarkHandler}>
              {itemIsBookmarked ? "Remove from bookmarks" : "Bookmark!"}
            </button>
          </div>
        </div>
        <Link href={`/${props.type}/${info._id}`}>
          <div className={styles.actions}>
            <h4>Open for more details</h4>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default AidItem;
