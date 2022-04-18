import classes from "./EducationItem.module.css";
import Card from "../ui/card";
import Item from "../ui/item"
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";

function EducationItem(props) {
  const { info } = props;

  const bookmarksCtx = useContext(BookmarksContext)
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(info.id)

  const toggleBookmarkHandler = () => {
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(info.id)
    } else {
      bookmarksCtx.addBookmark({
        id: info.id,
        title: info.title,
        location: info.location,
        category: info.category,
        tutor: info.tutor,
        language: info.language,
        contact: info.contact,
        studentAge: info.studentAge
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <Item onBookmark={toggleBookmarkHandler} itemIsBookmarked={itemIsBookmarked}>
        <div className={classes.content}>
          <h2>Category: {info.category}</h2>
          <h3>Title: {info.title}</h3>
          <p>language {info.language}</p>
          <p>Drop off location: {info.location}</p>
        </div>
        </Item>
      </Card>
    </li>
  )
}

export default EducationItem
