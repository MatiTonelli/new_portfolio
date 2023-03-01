import React from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.buttonsContainer}>
        <a>Home</a>
        <a>About me</a>
        <a>Portfolio</a>
      </div>
      <div className={styles.contactButtonContainer}>
        <button>Contact Me</button>
      </div>
    </div>
  );
}
