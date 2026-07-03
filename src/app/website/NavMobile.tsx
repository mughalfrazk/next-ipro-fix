"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          <a href="#services"    className={styles.mobileLink} onClick={() => setOpen(false)}>Services</a>
          <a href="#how-it-works" className={styles.mobileLink} onClick={() => setOpen(false)}>How it works</a>
          <a href="#reviews"     className={styles.mobileLink} onClick={() => setOpen(false)}>Reviews</a>
          <a href="#contact"     className={styles.mobileLink} onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact"     className={styles.mobileLink} onClick={() => setOpen(false)}>+971 00 000 0000</a>
          <a href="#quote"       className={styles.mobileBookBtn} onClick={() => setOpen(false)}>Book a Repair</a>
        </div>
      )}
    </>
  );
}
