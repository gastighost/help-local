// import classes from "./EducationItem.module.css";
// import Card from "../ui/card";
// import Item from "../ui/item";
// import { useContext } from "react";
// import BookmarksContext from "../../store/BookmarksContext";
// import Link from "next/link";


// function EducationItem(props) {
//   const { info } = props;

//   // console.log(props.type);
//   const bookmarksCtx = useContext(BookmarksContext)
//   const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(info._id)


//   const toggleBookmarkHandler = () => {
//     if (itemIsBookmarked) {
//       bookmarksCtx.removeBookmark(info.id);
//     } else {
//       bookmarksCtx.addBookmark({
//         isBookmarked: true
//       });
//     }
//   };

//   return (
//     <div>

//       <Item
//         onBookmark={toggleBookmarkHandler}
//         itemIsBookmarked={itemIsBookmarked}
//         info={info}
//       />
//       {/* <div className={classes.actions}>
//           <button>
//             <Link href={`/${props.type}/${props.id}`}>Request!</Link>
//           </button>
//           <button onClick={toggleBookmarkHandler}>
//             {itemIsBookmarked ? "Remove from bookmarks" : "Bookmark!"}
//           </button>
//         </div> */}
//     </div>




//   );
// }

// export default EducationItem;
