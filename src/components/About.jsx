import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInnerContainer}>
          <div className={styles.aboutImageContainer}>
            <img src="../public/hacker.png" alt="" />
          </div>
          <div className={styles.aboutDescContainer}>
            <div className={styles.aboutHeading}>About</div>
            <div className={styles.aboutDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              neque aut, ducimus culpa quis modi ad sunt doloribus facilis
              quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nulla neque aut, ducimus culpa quis modi ad sunt doloribus facilis
              quisquam.
            </div>
            <div>
              <button className={styles.cta} type="submit">
                <span>Resume</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
