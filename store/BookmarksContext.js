import { createContext, useState } from "react";
import { useRouter } from "next/router"
import EducationIndex from "../pages/education";
// import {getBookmarkedItemById} from "../util/mongodb"
// import {ObjectId} from "mongodb"


const BookmarksContext = createContext({
  bookmarks: [],
  totalBookmarks: 0,
  addBookmark: (bookmarkedItem) => {},
  removeBookmark: (itemID) => {},
  // itemIsBookmarked: false,
})


export const BookmarksContextProvider = (props) => {
  const router = useRouter()
  const [userBookmarks, setuserBookmarks] = useState([])
  // const [itemIsBookmarked, setitemIsBookmarked] = useState()

  const addBookmarkHandler = (bookmarkedItem) => {
    setuserBookmarks((prevBookmarks) => {
      return prevBookmarks.concat(bookmarkedItem)
    })

    fetch("/api/education", {
      method: "PATCH",
      body: JSON.stringify({
        id: bookmarkedItem._id,
        isBookmarked: true,
        // ...{bookmarkedItem}
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
      }).then((data) => {
        // setitemIsBookmarked(true)
        router.push("/education/")
        // console.log(itemIsBookmarked);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const removeBookmarkHandler = (itemId) => {
    setuserBookmarks((prevBookmarks) => {
      return prevBookmarks.filter(bookmark => bookmark._id !== itemId)
    })

    fetch("/api/education", {
      method: "PATCH",
      body: JSON.stringify({
        id: itemId,
        isBookmarked: false,
        // ...{bookmarkedItem}
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
      }).then((data) => {
        console.log(itemId);
        // setitemIsBookmarked(false)
        router.push("/education/")
        // console.log(itemIsBookmarked);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  const itemIsBookmarkedHandler = (itemId) => {
    // return userBookmarks.some(item => item._id === itemId)
    // const bookmarkedItem = getBookmarkedItemById(ObjectId(itemId))
    // console.log(bookmarkedItem);
    // if (bookmarkedItem._id === itemId)
  }

  const context = {
    bookmarks: userBookmarks,
    totalBookmarks: userBookmarks.length,
    addBookmark: addBookmarkHandler,
    removeBookmark: removeBookmarkHandler,
    // itemIsBookmarked: itemIsBookmarked,
  }

  return <BookmarksContext.Provider value={context}>
    {props.children}
  </BookmarksContext.Provider>
}



export default BookmarksContext
