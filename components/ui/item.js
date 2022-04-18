import classes from "./item.module.css"

const Item = (props) => {
  const onBookmarkHandler = (event) => {
    event.preventDefault()
    props.onBookmark()
    console.log(props.itemIsBookmarked );
  }

  return <div>
    {props.children}
    <div className={classes.actions}>
      <button>Request!</button>
      <button onClick={onBookmarkHandler}>{ props.itemIsBookmarked ? "Remove from bookmarks" : "Bookmark!" }</button>
    </div>
  </div>
}

export default Item
