import styles from "./Hero.module.css";
import Starfield from "react-starfield";
import { ReactTyped } from "react-typed";
import heroImg from "../assets/nav.png"

export default function Hero() {
  return (
    <>
      <div className={styles.heroContainer}>
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          // backgroundColor="black"
        />
        {/* Other components */}
        <div className={styles.profileContainer}>
          <img src={heroImg} alt="Profile" />
        </div>
        <div className={styles.profileIntro}>
          <div className={styles.mainIntro}>
            Hi. I'm <span className={styles.yellowText}>Navneet</span>
          </div>
          <div className={styles.descIntro}>
            <h1>
              <span className={styles.yellowText}> I'm Into </span>
              <ReactTyped
                strings={[
                  "Web Development",
                  "Frontend Development",
                  "Backend Development",
                  "Full Stack Development",
                ]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
              />
            </h1>
          </div>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
