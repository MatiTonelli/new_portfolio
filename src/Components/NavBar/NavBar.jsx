import React from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {

  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    let offset;
    if(elementId == 'portfolio'){
      offset = element.offsetTop - (window.innerHeight / 2 - element.offsetHeight / 2) - (window.innerHeight * 0.15);
    } else {
      offset = element.offsetTop - (window.innerHeight / 2 - element.offsetHeight / 2);
    }
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }

  function scrollToElementOnTop(elementId) {
    const element = document.getElementById(elementId);
    const offset = element.getBoundingClientRect().top + window.pageYOffset;
    const paddingTop = parseFloat(getComputedStyle(document.documentElement).paddingTop);
    const finalOffset = offset - paddingTop - window.innerHeight * 0.15;
    window.scrollTo({ top: finalOffset, behavior: 'smooth' });
  }

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.buttonsContainer}>
        <button onClick={()=>scrollToElement('home')}>Home</button>
        <button onClick={()=>scrollToElement('about')}>About me</button>
        <button onClick={()=>scrollToElementOnTop('portfolio')}>Portfolio</button>
        <button onClick={()=>scrollToElement('contact')}>Contact</button>
      </div>
      <div className={styles.contactButtonContainer}>
        <button>Download CV</button>
      </div>
    </div>
  );
}
