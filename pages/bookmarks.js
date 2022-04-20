import { useContext } from "react";
import BookmarksContext from "../store/BookmarksContext";
import ItemsList from "../components/ui/ItemsList";

const Bookmarks = (props) => {
  const bookmarksCtx = useContext(BookmarksContext)
  let content;

  if (bookmarksCtx.totalBookmarks === 0) {
    content = <p>No faves yet 😿</p>
  } else {
    content = <ItemsList info={bookmarksCtx.bookmarks}/>
  }

  return <section>
    <div>
      <h2>My favourite items</h2>
    </div>
    {content}
  </section>
}

export default Bookmarks
