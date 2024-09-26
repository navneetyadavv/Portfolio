import styles from "./Hero.module.css";
import { ReactTyped } from "react-typed";
import heroImg from "../assets/nav.png"

export default function Hero() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.profileContainer}>
          <img src={heroImg} alt="Profile" />
        </div>
        <div className={styles.profileIntro}>
          <div className={styles.mainIntro}> <span className={styles.yellowText}>Hi. I'm </span>Navneet </div>
          <div className={styles.descIntro}>
            <h1>
              <ReactTyped
                strings={[
                  "Web Developer",
                  "Programmer",
                ]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
              />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
