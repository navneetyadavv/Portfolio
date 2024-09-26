import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import styles from "./Header.module.css";

export default function Header({
  scrollToAbout,
  scrollToProjects,
  scrollToSkills,
  scrollToContact,
}) {
  const links = ["Home", "About", "Projects", "Skills", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.2;
    if (window.scrollY > scrollThreshold && window.innerWidth > 600) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isOpen = isMenuOpen ? styles.open : styles.close;

  const handleClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    if (link === "Contact") {
      setIsContactFormVisible(true);
    } else {
      setIsContactFormVisible(false);
    }

    switch (link) {
      case "Home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "About":
        scrollToAbout();
        break;
      case "Projects":
        scrollToProjects();
        break;
      case "Skills":
        scrollToSkills();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.hamContainer}>
        <svg
          className={`${styles.ham} ${styles.hamRotate} ${styles.ham1} ${
            isMenuOpen ? styles.active : ""
          }`}
          viewBox="0 0 100 100"
          width="80"
          onClick={toggleMenu}
          aria-label="Menu"
          role="button"
          tabIndex="0"
          onKeyPress={(e) => e.key === "Enter" && toggleMenu()}
        >
          <path
            className={`${styles.line} ${styles.top}`}
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path
            className={`${styles.line} ${styles.middle}`}
            d="m 30,50 h 40"
          />
          <path
            className={`${styles.line} ${styles.bottom}`}
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </div>

      <div
        className={`${styles.background} ${isMenuOpen ? styles.open : ""}`}
      ></div>
      <div className={`${styles.menu} ${isOpen}`}>
        <nav className={`${styles.nav} ${showHeader ? styles.active : ""}`}>
          <div className={styles.navLogo}>Navneet Yadav</div>
          <div className={styles.navLinks}>
            {links.map((link, index) => (
              <a
                key={link}
                className={`${isMenuOpen ? styles.appear : ""} ${
                  activeLink === link ? styles.active : ""
                }`}
                style={{
                  animationDelay: `0.${index + 1}s`,
                }}
                onClick={() => handleClick(link)}
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <ContactForm
        isContactFormVisible={isContactFormVisible}
        onClose={handleClick}
      ></ContactForm>
    </>
  );
}
