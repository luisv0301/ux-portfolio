import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M22.1297 29.784V33H11.0177V16.368H14.7617V29.784H22.1297ZM27.446 33C26.79 31.608 26.142 30.16 25.502 28.656C24.862 27.152 24.254 25.664 23.678 24.192C23.102 22.72 22.566 21.312 22.07 19.968C21.59 18.624 21.174 17.424 20.822 16.368H24.95C25.27 17.328 25.614 18.368 25.982 19.488C26.366 20.592 26.75 21.696 27.134 22.8C27.534 23.904 27.918 24.96 28.286 25.968C28.654 26.976 28.998 27.848 29.318 28.584C29.622 27.848 29.958 26.976 30.326 25.968C30.71 24.96 31.094 23.904 31.478 22.8C31.878 21.696 32.262 20.592 32.63 19.488C33.014 18.368 33.366 17.328 33.686 16.368H37.67C37.302 17.424 36.878 18.624 36.398 19.968C35.918 21.312 35.39 22.72 34.814 24.192C34.238 25.664 33.63 27.152 32.99 28.656C32.35 30.16 31.702 31.608 31.046 33H27.446Z"
            fill="black"
          />
        </svg>
      </Link>
      <select name="language" id="" className={styles.navbar__select}>
        <option value="Español">Español</option>
        <option value="English">English</option>
      </select>
    </nav>
  );
}
