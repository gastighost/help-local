import styles from './cardcontainer.module.scss';

function Cardcontainer() {
  return (
    <section className={styles.myclass}>
      <div className={styles.socialmediacard}>
        <div className={styles.socialimage}>
          <img></img>
        </div>
        <div className={styles.cardinfo}>
          <p className={styles.cardtitle}>Support group for Ukrainian refugees in Berlin</p>
          <p className={styles.carddescription}>I'm a small subtext.</p>
        </div>
      </div>
      <div className={styles.socialmediacard}>
        I'm a card.
      </div>
    </section>
  );
}

export default Cardcontainer;
