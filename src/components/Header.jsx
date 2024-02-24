import ContactForm from "./ContactForm";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleContactClick = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  const showBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", showBackground);

  return (
    <>
      <div className={styles.headerContainer}>
        <div
          className={
            navbar
              ? `${styles.navbarContainer} ${styles.active}`
              : styles.navbarContainer
          }
        >
          <div className={styles.menu}>
            <div className={styles.item}>Home</div>
            <div className={styles.item}>About</div>
            <div className={styles.item}>Projects</div>
            <div className={styles.item}>Skills</div>
            <div className={styles.item} onClick={handleContactClick}>
              Contact
            </div>
          </div>
        </div>
        <ContactForm
          onClose={() => setIsFormVisible(false)}
          // isVisible={isFormVisible}
          isFormVisible={isFormVisible}
        />
      </div>
    </>
  );
}
