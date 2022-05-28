import styles from './cardcontainer.module.scss';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function Cardcontainer() {
  return (
    <section className={styles.myclass}>
      <div className={styles.socialmediacard}>
        <div className={styles.socialimage}>
          <img></img>
        </div>
        <div className={styles.contentright}>
          <div className={styles.upperpart}>
            <h4 className={styles.cardtitle}>Support group for Ukrainian refugees what is this!</h4>
            <div className={styles.cardbottom}>
              <div className={styles.icontext}><LockOutlinedIcon /><p>private</p></div>
              <div className={styles.members}><p><strong>12345</strong> members</p></div>
            </div>
          </div>
          <div className={styles.socialcategory}>
            <img src='/social-facebook.png' alt='Help Local Icon' className={styles.socialicon}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cardcontainer;
