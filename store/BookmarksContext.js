import { createContext, useContext } from "react";
import { useState } from "react";

const BookmarksContext = createContext({
  bookmarks: [],
  totalBookmarks: 0,
  addBookmark: (BookmarkMeetup) => {},
  removeBookmark: (itemID) => {},
  itemIsBookmarked: (itemID) => {},
})

export const BookmarksContextProvider = (props) => {
  const [userBookmarks, setuserBookmarks] = useState([])

  const addBookmarkHandler = (bookmarkedItem) => {
    setuserBookmarks((prevBookmarks) => {
      return prevBookmarks.concat(bookmarkedItem)
    })
  }

  const removeBookmarkHandler = (itemId) => {
    setuserBookmarks((prevBookmarks) => {
      return prevBookmarks.filter(bookmark => item.id !== itemId)
    })
  }

  const itemIsBookmarked = (itemId) => {
    return userBookmarks.some(item => item.id === itemId)
  }

  const context = {
    bookmarks: userBookmarks,
    totalBookmarks: userBookmarks.length,
    addBookmark: addBookmarkHandler,
    removeBookmark: removeBookmarkHandler,
    itemIsBookmarked: itemIsBookmarked,
  }

  return <BookmarksContext.Provider value={context}>
    {props.children}
  </BookmarksContext.Provider>
}

export default BookmarksContext
