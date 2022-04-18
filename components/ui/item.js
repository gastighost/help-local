import classes from "./item.module.css"
import Card from "./card"
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";

const Item = (props) => {


  const bookmarksCtx = useContext(BookmarksContext)
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(props.id)

  const toggleBookmarkHandler = (event) => {
    console.log(bookmarksCtx.totalBookmarks);
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(props.id)
    } else {
      bookmarksCtx.addBookmark({
        id: props.id,
        title: props.title,
        location: props.location,
        category: props.category,
        tutor: props.tutor,
        language: props.language,
        contact: props.contact,
        studentAge: props.studentAge
      })
    }
    // props.onBookmark()
    // console.log(props.itemIsBookmarked );
  }

  // const suka = (event) => {
  //   event.preventDefault()
  //   console.log(itemIsBookmarked);
  // }

  return<li className={classes.item} >
    <Card>
      <div className={classes.content}>
        <h2>{props.category}</h2>
        <h3>{props.title}</h3>
        <address>{props.location}</address>
      </div>
      <div className={classes.actions}>
        <button>Request!</button>
        <button onClick={toggleBookmarkHandler}>{ itemIsBookmarked ? "Remove from bookmarks" : "Bookmark!" }</button>
      </div>
    </Card>
  </li>
}

export default Item
