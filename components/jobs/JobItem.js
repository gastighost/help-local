import classes from "./JobItem.module.css";
import Link from "next/link";
import Card from "../ui/card";
import Button from "../ui/button";
import BookmarksContext from "../../store/BookmarksContext";
import { useContext } from "react";

function JobItem(props) {
  const { job } = props;
  const bookmarksCtx = useContext(BookmarksContext);
  const itemIsBookmarked = bookmarksCtx.itemIsBookmarked(job._id);

  const toggleBookmarkHandler = (event) => {
    if (itemIsBookmarked) {
      bookmarksCtx.removeBookmark(job._id);
    } else {
      bookmarksCtx.addBookmark(job)
    }
  }

  return (
    <Card>
      <div className={classes.content}>
        <h2>Category: {props.job.category}</h2>
        <h3>Title: {props.job.title}</h3>
        <h3>Company: {props.job.company}</h3>
        <p>Description: {props.job.description}</p>
        <p>Monthly salary in EUR: {props.job.monthlySalary}</p>
      </div>
      <div className={classes.actions}>
        <Button>
          <Link href={`/${props.type}/${props.job._id}`}>Open</Link>
        </Button>
        <button onClick={toggleBookmarkHandler}>
          {itemIsBookmarked ? "Remove from bookmarks" : "Bookmark!"}
        </button>
      </div>
    </Card>
  );
}

export default JobItem;
