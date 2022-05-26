import styles from './cardcontainer.module.scss';

function Cardcontainer() {
  return (
    <section className={styles.myclass}>
      <h1>Here is a list with cards...</h1>
      <div className={styles.socialmediacard}>
      I'm a card
      </div>
      <div className={styles.socialmediacard}>
      I'm also a card
      </div>
      <div className={styles.socialmediacard}>
      Same here!
      </div>
    </section>
  );
}

export default Cardcontainer;
