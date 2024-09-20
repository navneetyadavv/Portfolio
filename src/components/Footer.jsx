import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInnerContainer}>
        <a href="https://github.com/navneetyadavv">
          <FaGithub className={`${styles.footerLink} ${styles.github}`} />
        </a>
        <a href="https://www.linkedin.com/in/navneet-yadav-19183423a/">
          <FaLinkedin className={`${styles.footerLink} ${styles.linkedin}`} />
        </a>
        <a href="https://www.instagram.com/whyisthisnav?utm_source=qr&igsh=MTY4YTM5MDBvaWJ3bg==">
          <FaInstagram className={`${styles.footerLink} ${styles.instagram}`} />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=navneetyadav49710@gmail.com&su=Hello%20there">
          <FaTelegram className={`${styles.footerLink} ${styles.telegram}`} />
        </a>
      </div>
      <div className={styles.copyrights}>
        © <span>Navneet Yadav</span> . All rights reserved.
      </div>
    </div>
  );
}
