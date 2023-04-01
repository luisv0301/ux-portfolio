import Link from "next/link";
import style from "./button.module.css";

export default function Button({ children }) {
  return (
    <Link href="mailto:luisvbdr0301@gmail.com" className={style.button}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </Link>
  );
}
