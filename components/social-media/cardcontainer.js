import styles from './cardcontainer.module.scss';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function Cardcontainer() {
  return (
    <section className={styles.myclass}>
      <div className={styles.socialmediacard}>
        <div className={styles.socialimage}>
          <img src="https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/278572178_290311139970670_332884411666853242_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hFbP9eV7JTkAX-jRbhk&_nc_ht=scontent-ber1-1.xx&oh=00_AT-UyjRaPrQUG91h6RBYYh7_boqObdPJD-Zlg6cp9gQE6Q&oe=629910C2" alt="Ukraine-Hilfe Berlin e.V. Logo" width="64px" height="64px" />
        </div>
        <div className={styles.contentright}>
        <h4 className={styles.smallsemibold}>Ukraine-Hilfe Berlin e.V.</h4>
          <div className={styles.lowerpart}>
            <div className={styles.cardbottom}>
              <div className={styles.icontext}><LockOutlinedIcon /><p className={styles.socialsmallregular}>private</p></div>
              <div className={styles.members}><p className={styles.socialsmallregular}><strong>5.019</strong> members</p></div>
            </div>
            <div className={styles.socialcategory}>
              <img src='/social-facebook.png' alt='Help Local Icon' className={styles.socialicon}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialmediacard}>
        <div className={styles.socialimage}>
          <img src="https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/241733089_137795205222265_6032958497355176025_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gbucizDCsAUAX_lAxoF&_nc_oc=AQkpIpPMcrX7SVz0RwzzQfEVHkvzDlpFR2s679nzs55mNVoTs0OMu6eVH9LuPGDNCZQ&_nc_ht=scontent-ber1-1.xx&oh=00_AT_8Zrf9TT_NgEiOYZTFKVhu3xw1KA5yl2NOnhh8OXmnYA&oe=62985F47" alt="Ukraine-Hilfe Berlin e.V. Logo" width="64px" height="64px" />
        </div>
        <div className={styles.contentright}>
        <h4 className={styles.smallsemibold}>Support group for ukrainian refugees in Berlin</h4>
          <div className={styles.lowerpart}>
            <div className={styles.cardbottom}>
              <div className={styles.icontext}><LockOutlinedIcon /><p className={styles.socialsmallregular}>private</p></div>
              <div className={styles.members}><p className={styles.socialsmallregular}><strong>13.456</strong> members</p></div>
            </div>
            <div className={styles.socialcategory}>
              <img src='/social-facebook.png' alt='Help Local Icon' className={styles.socialicon}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cardcontainer;
