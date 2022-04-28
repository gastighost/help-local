import { createContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router"
import EducationIndex from "../pages/education";
// import {getBookmarkedItemById} from "../util/mongodb"
// import {ObjectId} from "mongodb"


const BookmarksContext = createContext({
  bookmarks: [],
  totalBookmarks: 0,
  addBookmark: (bookmarkedItem) => {},
  removeBookmark: (itemID) => {},
  itemIsBookmarked: (itemID) => {},
})


export const BookmarksContextProvider = (props) => {
  const router = useRouter()
  const [userBookmarks, setuserBookmarks] = useState([])
  const [itemToDelete, setItemToDelete] = useState("")
  const [itemToAdd, setItemToAdd] = useState("")

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    },[value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  }
  const prevBookmarksLength = usePrevious(userBookmarks.length)

  console.log("detele Item", itemToDelete);
  console.log("item to add", itemToAdd);


   useEffect(() => {
    const lastBookmarkedItem = userBookmarks[userBookmarks.length - 1]
    console.log(lastBookmarkedItem);

    const bookmarkItem = async () => {
    fetch("/api/education", {
      method: "PATCH",
      body: JSON.stringify({
        id: itemToAdd,
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
        // router.push("/education/")
        // console.log(itemIsBookmarked);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    const removeBookmark = async (itemId) => {
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
        // console.log(data.item._id);
        // setitemIsBookmarked(false)
        // router.push("/education/")
        // console.log(itemIsBookmarked);
      })

      .catch((error) => {
        console.log(error);
      });
    }

    if (userBookmarks.length > prevBookmarksLength && itemToAdd)
   {
    bookmarkItem();
    setItemToAdd("")
   }
   if (userBookmarks.length < prevBookmarksLength && itemToDelete) {
     removeBookmark(itemToDelete)
     setItemToDelete('')
    }
  }, [userBookmarks]);
  // const [itemIsBookmarked, setitemIsBookmarked] = useState()

  const addBookmarkHandler = (bookmarkedItem) => {
    setItemToAdd(bookmarkedItem._id)
    setuserBookmarks((prevBookmarks) => {
      return prevBookmarks.concat(bookmarkedItem)
    })

  }

  const removeBookmarkHandler = (itemId) => {
    setItemToDelete(itemId)
    setuserBookmarks((prevBookmarks) => {
      return prevBookmarks.filter(bookmark => bookmark._id !== itemId)
    })
  }

  const itemIsBookmarkedHandler = (itemId) => {
    return userBookmarks.some(item => item._id === itemId)
    // const bookmarkedItem = getBookmarkedItemById(ObjectId(itemId))
    // console.log(bookmarkedItem);
    // if (bookmarkedItem._id === itemId)
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
