import { useRef } from "react";
import { useRouter } from "next/router";
import Button from "../../components/ui/button";

import styles from "./filter-bar.module.scss";

function CategoryFilterBar(props) {
  const router = useRouter();
  const categoryInputRef = useRef();

  function findCategoryHandler(category) {
    const fullPath = `/${category}`;

    router.push(fullPath);
  }

  function submitHandler(event) {
    event.preventDefault();

    const selectedCategory = categoryInputRef.current.value;

    findCategoryHandler(selectedCategory);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Category</label>
          <select id="year" ref={categoryInputRef}>
            <option value="education">Education</option>
            <option value="humanitarian-aid">Humanitarian Aid</option>
            <option value="jobs">Jobs</option>
            <option value="social-media">Social Media</option>
          </select>
        </div>
      </div>
      <Button>Filter Category</Button>
    </form>
  );
}

export default CategoryFilterBar;
