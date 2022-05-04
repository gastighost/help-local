import classes from "./individualItem.module.css";
import Card from "./card";
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";
import Link from "next/link";
import Button from "./button";

const IndividualItem = (props) => {

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
        <h1>{selectedEducation.title}</h1>
        <h2>Category: {selectedEducation.category}</h2>
        <p>Age of the student: {selectedEducation.studentAge}</p>
        <p>Drop off location: {selectedEducation.location}</p>
        <p>Tutor: {selectedEducation.tutor}</p>
        <p>Language {selectedEducation.language}</p>
      </div>
        <div className={classes.actions}>
          <Button onClick={props.onRequest}>Request!</Button>
          {/* <Button onClick={props.onEdit}>Edit</Button>
          <Button onClick={props.onDelete}>Delete</Button> */}
        </div>
      </Card>
  );
};

export default IndividualItem;
