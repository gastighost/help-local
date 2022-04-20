import classes from "./item.module.css"
import Card from "./card"
import { useContext } from "react";
import BookmarksContext from "../../store/BookmarksContext";

const Item = (props) => {

  const { info, id } = props;

  const bookmarksCtx = useContext(BookmarksContext)
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(info.id)

  const toggleBookmarkHandler = (event) => {
    console.log(info.id);
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(info.id)
    } else {
      bookmarksCtx.addBookmark({
        key: id,
        id: id,
        category: info.category,
        title: info.title,
        location: info.location,
        ...{info}
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
        <h2>{info.category}</h2>
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
