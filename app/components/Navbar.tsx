import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <h1>
        <Link href="/">MySousApp</Link>
      </h1>
      <h1>
        <Link href="/login">Log In</Link>
      </h1>
    </nav>
  );
}
