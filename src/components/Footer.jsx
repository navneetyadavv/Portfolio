import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInnerContainer}>
        <FaGithub
          className={`${styles.footerLink} ${styles.github}`}
        ></FaGithub>
        <FaInstagram
          className={`${styles.footerLink} ${styles.instagram}`}
        ></FaInstagram>
        <FaLinkedin
          className={`${styles.footerLink} ${styles.linkedin}`}
        ></FaLinkedin>
        <FaTelegram
          className={`${styles.footerLink} ${styles.telegram}`}
        ></FaTelegram>
      </div>
      <div className={styles.copyrights}>
        © <span>Navneet Yadav</span> . All rights reserved.
      </div>
    </div>
  );
}
