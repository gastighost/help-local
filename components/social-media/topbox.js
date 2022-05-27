import styles from './topbox.module.scss';

function Topbox() {
  return (
    <section className={styles.container}>
      <h3>This is a list of useful groups</h3>
      <p>And here is a short description...</p>
    </section>
  );
}

export default Topbox;
