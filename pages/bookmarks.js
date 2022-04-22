import { useContext } from "react";
import BookmarksContext from "../store/BookmarksContext";
import ItemsList from "../components/ui/ItemsList";
import {getBookmarkedDocuments} from "../util/mongodb"

const Bookmarks = (props) => {
  const { bookmarks } = props;
  const bookmarksCtx = useContext(BookmarksContext)
  let content;
  console.log(bookmarks);
  if (bookmarksCtx.totalBookmarks === 0) {
    content = <p>No faves yet 😿</p>
  } else {
    content = <ItemsList info={bookmarks}/>
  }

  return <section>
    <div>
      <h2>My favourite items</h2>
    </div>
    {content}
  </section>
}

export async function getServerSideProps(context) {
  const bookmarks = await getBookmarkedDocuments("education");

  return {
    props: {
      bookmarks: JSON.parse(JSON.stringify(bookmarks)),
    },
  };
}

export default Bookmarks
