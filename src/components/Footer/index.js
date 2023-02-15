import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Contactme 👋</h2>
        <Link href="" className={styles.footer__email}>
          luisvbdr0301@gmail.com
        </Link>
      </div>
      <ul className={styles.footer__list}>
        <li className={styles.footer__item}>
          <Link href=""></Link>LinkedIn{" "}
        </li>
        <li className={styles.footer__item}>
          <Link href=""></Link>Behance
        </li>
        <li className={styles.footer__item}>
          <Link href=""></Link>Twitter
        </li>
      </ul>
    </footer>
  );
}
