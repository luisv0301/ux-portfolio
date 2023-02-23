import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Contactme 📧</h2>
        <Link
          href="mailto:luisvbdr0301@gmail.com"
          className={styles.footer__email}
        >
          luisvbdr0301@gmail.com
        </Link>
      </div>
      <ul className={styles.footer__list}>
        <li className={styles.footer__item}>
          <Link href="https://ve.linkedin.com/in/luis-vasquez-ui">
            LinkedIn
          </Link>
        </li>
        <li className={styles.footer__item}>
          <Link href="https://www.behance.net/luisv0301">Behance</Link>
        </li>
        <li className={styles.footer__item}>
          <Link href="https://twitter.com/Luisvbdr">Twitter</Link>
        </li>
      </ul>
    </footer>
  );
}
