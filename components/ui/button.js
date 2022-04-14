import Link from "next/link";
import styles from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button className={styles.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
}

export default Button;
