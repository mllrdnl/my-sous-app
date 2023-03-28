"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import useLoginModal from "@/hooks/useLoginModal";

export default function Navbar() {
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <nav className={styles.navContainer}>
      <h1>
        <Link href="/">MySousApp</Link>
      </h1>
      <button onClick={onClick}>Login</button>
    </nav>
  );
}
