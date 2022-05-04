import classes from "./EducationItem.module.css";
import Card from "../ui/card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";

const EducationItem = (props) => {

  const bookmarksCtx = useContext(BookmarksContext)
  const itemIsBookmarked = bookmarksCtx.isBookmarked
  // console.log(props.isBookmarked);

  const toggleBookmarkHandler = (event) => {

    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(props._id)
    } else {
      bookmarksCtx.addBookmark({
        ...{props},
        key: props._id,
        _id: props._id,
        category: props.category,
        title: props.title,
        location: props.location,
        isBookmarked: props.isBookmarked
      })
    }
    // console.log(itemIsBookmarked);
  };

  return (
      <Card>
         <div className={classes.content}>
        <h1>{props.title}</h1>
        <p>Age of the student: {props.studentAge}</p>
        <p>Drop off location: {props.location}</p>
        <p>Tutor: {props.tutor}</p>
        <p>Language {props.language}</p>
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
  );
};

export default EducationItem;
