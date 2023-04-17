import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerChicoContainer}>
        
        <button className={styles.botonFooter} onClick={() => scrollToTop()}>
          Go up ↑
        </button>
      </div>
      <p className={styles.textoFooter}>Matias Tonelli © 2023</p>
    </div>
  );
}
