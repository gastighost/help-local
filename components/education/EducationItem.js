import classes from "./EducationItem.module.css";
import Card from "../ui/card";
import Item from "../ui/Item"
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";


function EducationItem(props) {
  // console.log(props);
  // console.log(props.type);
  const bookmarksCtx = useContext(BookmarksContext)
  const itemIsBookmarked = props.isBookmarked
  console.log(itemIsBookmarked);

  // const toggleBookmarkHandler = () => {
  //   if (itemIsBookmarked) {
  //     bookmarksCtx.removeBookmark(props.id);
  //   } else {
  //     bookmarksCtx.addBookmark({
  //       isBookmarked: true
  //     });
  //   }
  // };
  const toggleBookmarkHandler = (event) => {
        if (itemIsBookmarked) {
          bookmarksCtx.removeBookmark(props.id)
          // bookmarksCtx.removeBookmarkFromDb(props._id)
        } else {
          bookmarksCtx.addBookmark({
            ...{props},
            key: props.id,
            _id: props.id,
            category: props.category,
            title: props.title,
            location: props.location,
            isBookmarked: props.isBookmarked
          })
        }
      console.log(itemIsBookmarked);
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
              <Link href={`/${props.type}/${props.id}`}>Open</Link>
            </button>
            <button onClick={toggleBookmarkHandler}>
              {itemIsBookmarked ? "Remove from bookmarks" : "Bookmark!"}
            </button>
          </div>
        </Card>
      </li>
    );
}

export default EducationItem
