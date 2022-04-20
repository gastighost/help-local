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
    fetch("/api/education", {
      method: "PATCH",
      body: JSON.stringify({
        id: bookmarkedItem.id,
        isBookmarked: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        console.log(data.message, data.education);
      })
      .catch((error) => {
        console.log(error);
      });
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
