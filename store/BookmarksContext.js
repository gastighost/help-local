import { createContext, useState, useEffect, useRef } from "react";

const BookmarksContext = createContext({
  bookmarks: [],
  totalBookmarks: 0,
  addBookmark: (bookmarkedItem) => {},
  removeBookmark: (itemID) => {},
  itemIsBookmarked: (itemID) => {},
});

export const BookmarksContextProvider = (props) => {
  const [userBookmarks, setuserBookmarks] = useState(
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("storageArray"))) ||
      []
  );

  if (typeof window !== "undefined") {
    const bookmarksLocalStorage = (localStorage["storageArray"] =
      JSON.stringify(userBookmarks));
    const bookmarksStored = JSON.parse(
      localStorage.getItem("storageArray") || []
    );
    console.log(bookmarksStored);
  }

  const addItemToLocalStorage = (item) => {
    if (typeof window !== "undefined") {
      bookmarksStored.push(item);
      localStorage.setItem("storageArray", JSON.stringify(item));
    }
  };

  const addBookmarkHandler = (bookmarkedItem) => {
    setuserBookmarks((prevBookmarks) => {
      return prevBookmarks.concat(bookmarkedItem);
    });
    addItemToLocalStorage(bookmarkedItem);
  };

  const removeBookmarkHandler = (itemId) => {
    setuserBookmarks((prevBookmarks) => {
      return prevBookmarks.filter((bookmark) => bookmark._id !== itemId);
    });
  };

  const itemIsBookmarkedHandler = (itemId) => {
    return userBookmarks.some((item) => item._id === itemId);
  };

  const context = {
    bookmarks: userBookmarks,
    totalBookmarks: userBookmarks.length,
    addBookmark: addBookmarkHandler,
    removeBookmark: removeBookmarkHandler,
    itemIsBookmarked: itemIsBookmarkedHandler,
  };

  return (
    <BookmarksContext.Provider value={context}>
      {props.children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksContext;
