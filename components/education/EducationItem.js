import classes from "./EducationItem.module.css";
import Card from "../ui/card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";

const EducationItem = (props) => {

  const { selectedEducation } = props;
  // console.log(props.itemIsBookmarked);
  // console.log(props.type);
  const bookmarksCtx = useContext(BookmarksContext)
  const itemIsBookmarked = selectedEducation.isBookmarked
  // console.log(selectedEducation.isBookmarked);

  const toggleBookmarkHandler = (event) => {

    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(selectedEducation._id)
      // bookmarksCtx.removeBookmarkFromDb(selectedEducation._id)
    } else {
      bookmarksCtx.addBookmark({
        ...{selectedEducation},
        key: selectedEducation._id,
        _id: selectedEducation._id,
        category: selectedEducation.category,
        title: selectedEducation.title,
        location: selectedEducation.location,
        isBookmarked: selectedEducation.isBookmarked
      })
    }
    // console.log(itemIsBookmarked);
  };

  return (
      <Card>
         <div className={classes.content}>
        <h1>Humanitarian Show Page!</h1>
        <h2>Category: {selectedEducation.category}</h2>
        <h3>Title: {selectedEducation.title}</h3>
        <p>Age of the student: {selectedEducation.studentAge}</p>
        <p>Drop off location: {selectedEducation.location}</p>
        <p>Tutor: {selectedEducation.tutor}</p>
        <p>Language {selectedEducation.language}</p>
      </div>
        <div className={classes.content}>
          <h2>{selectedEducation.category}</h2>
          <h3>{selectedEducation.title}</h3>
          <address>{selectedEducation.location}</address>
        </div>
        <div className={classes.actions}>
          <button>
            <Link href={`/${selectedEducation.type}/${selectedEducation._id}`}>Open</Link>
          </button>
          <button onClick={toggleBookmarkHandler}>
            {itemIsBookmarked ? "Remove from bookmarks" : "Bookmark!"}
          </button>
        </div>
      </Card>
  );
};

export default EducationItem;
