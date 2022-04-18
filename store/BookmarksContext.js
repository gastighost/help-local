import { createContext, useState } from "react";

const BookmarksContext = createContext({
  bookmarks: [],
  totalBookmarks: 0,
  addBookmark: (bookmarkedItem) => {},
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
      return prevBookmarks.filter(bookmark => bookmark.id !== itemId)
    })
  }

  const itemIsBookmarkedHandler = (itemId) => {
    return userBookmarks.some(item => item.id === itemId)
  }

  const context = {
    bookmarks: userBookmarks,
    totalBookmarks: userBookmarks.length,
    addBookmark: addBookmarkHandler,
    removeBookmark: removeBookmarkHandler,
    itemIsBookmarked: itemIsBookmarkedHandler,
  }

  return <BookmarksContext.Provider value={context}>
    {props.children}
  </BookmarksContext.Provider>
}

export default BookmarksContext
