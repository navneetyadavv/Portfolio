import styles from "./About.module.css";
import hackerImg from "../assets/hacker.png";

export default function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInnerContainer}>
          <div className={styles.aboutImageContainer}>
            <img src={hackerImg} alt="" />
          </div>
          <div className={styles.aboutDescContainer}>
            <div className={styles.aboutHeading}>About</div>
            <div className={styles.aboutDesc}>
              I am Navneet Yadav, a dedicated full-stack developer with
              expertise in building responsive, scalable applications. I
              specialize in technologies like React.js, Node.js, and MongoDB,
              crafting seamless front-end interfaces and robust back-end
              solutions. With a strong foundation in JavaScript and experience
              across various frameworks. I'm eager to collaborate
              and contribute to innovative projects that drive real-world
              solutions.
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
