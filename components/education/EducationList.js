import EducationItem from "./EducationItem";
// import classes from "./EducationList.module.css";

function EducationList(props) {
  return (
    <ul className={classes.list}>
      {props.info.map((item) => (
        <EducationItem
          key={item._id}
          id={item._id}
          title={item.title}
          studentAge={item.studentAge}
          location={item.location}
          tutor={item.tutor}
          isBookmarked={item.isBookmarked}
          taken={item.taken}
          taken_by={item.taken_by}
          language={item.language}
          contact={item.contact}
          chat_active={item.chat_active}
          type={props.type}
        />
      ))}
    </ul>
  );
}

export default EducationList;
