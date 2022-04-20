import { createContext, useState } from "react";


const BookmarksContext = createContext({
  bookmarks: [],
  totalBookmarks: 0,
  addBookmark: (bookmarkedItem) => {},
  removeBookmark: (itemID) => {},
  itemIsBookmarked: (itemID) => {},
  removeBookmarkFromDb: (itemID) => {}
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
        isBookmarked: true,
        ...{bookmarkedItem}
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
          console.log(data);
          throw new Error(data.message || "Something went wrong");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const removeBookmarkHandler = (itemId) => {
    setuserBookmarks((prevBookmarks) => {
      return prevBookmarks.filter(bookmark => bookmark._id !== itemId)

    })

  }

  const removeBookmarkFromDbHandler = (itemId) => {
    fetch("/api/education", {
      method: "PATCH",
      body: JSON.stringify({
        isBookmarked: false,
        ...{bookmarkedItem}
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
          console.log(data);
          throw new Error(data.message || "Something went wrong");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const itemIsBookmarkedHandler = (itemId) => {
    return userBookmarks.some(item => item._id === itemId)
  }

  const context = {
    bookmarks: userBookmarks,
    totalBookmarks: userBookmarks.length,
    addBookmark: addBookmarkHandler,
    removeBookmark: removeBookmarkHandler,
    itemIsBookmarked: itemIsBookmarkedHandler,
    removeBookmarkFromDb: removeBookmarkFromDbHandler
  }

  return <BookmarksContext.Provider value={context}>
    {props.children}
  </BookmarksContext.Provider>
}



export default BookmarksContext
