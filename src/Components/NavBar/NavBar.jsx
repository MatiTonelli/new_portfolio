import React from "react";
import styles from "./NavBar.module.css";
import { useState, useRef, useEffect } from "react";

export default function NavBar() {
  const [isSmallerThan740, setIsSmallerThan740] = useState(false);
  const [menuMobileAbierto, setMenuMobileAbierto] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 740px)");
    const handleMediaQueryChange = (event) => {
      setIsSmallerThan740(event.matches);
    };
    setIsSmallerThan740(mediaQueryList.matches);
    mediaQueryList.addListener(handleMediaQueryChange);
    return () => mediaQueryList.removeListener(handleMediaQueryChange);
  }, []);

  function scrollToTop() {
    if (isSmallerThan740) {
      toggleMenu();
    }
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 90);
  }

  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    let offset;
    if (elementId == "portfolio") {
      offset =
        element.offsetTop -
        (window.innerHeight / 2 - element.offsetHeight / 2) -
        window.innerHeight * 0.15;
    } else {
      offset =
        element.offsetTop - (window.innerHeight / 2 - element.offsetHeight / 2);
    }
    window.scrollTo({ top: offset, behavior: "smooth" });
    if (isSmallerThan740) {
      toggleMenu();
    }
  }

  function scrollToElementOnTop(elementId) {
    const element = document.getElementById(elementId);
    const offset = element.getBoundingClientRect().top + window.pageYOffset;
    const paddingTop = parseFloat(
      getComputedStyle(document.documentElement).paddingTop
    );
    const finalOffset = offset - paddingTop - window.innerHeight * 0.15;
    window.scrollTo({ top: finalOffset, behavior: "smooth" });
    if (isSmallerThan740) {
      toggleMenu();
    }
  }

  function toggleMenu() {
    document.getElementById("1").classList.toggle(styles.linea1);
    document.getElementById("2").classList.toggle(styles.linea2);
    document.getElementById("3").classList.toggle(styles.linea3);
    document
      .getElementById("navBar")
      .classList.toggle(styles.menuContainerAbierto);
    setMenuMobileAbierto(!menuMobileAbierto);
  }

  return (
    <>
      {isSmallerThan740 ? (
        <div className={styles.navBarContainer} id="navBar">
          {menuMobileAbierto ? (
            <div className={styles.menuMobile}>
              <button onClick={() => scrollToTop()}>Home</button>
              <button onClick={() => scrollToElement("about")}>About me</button>
              <button onClick={() => scrollToElementOnTop("portfolio")}>
                Portfolio
              </button>
              <button onClick={() => scrollToElementOnTop("contact")}>
                Contact
              </button>
            </div>
          ) : null}
          <button className={styles.menuButton} onClick={toggleMenu}>
            <div className={styles.lineasButton} id="1"></div>
            <div className={styles.lineasButton} id="2"></div>
            <div className={styles.lineasButton} id="3"></div>
          </button>
        </div>
      ) : (
        <div className={styles.navBarContainer}>
          <div className={styles.buttonsContainer}>
            <button onClick={() => scrollToTop()}>Home</button>
            <button onClick={() => scrollToElement("about")}>About me</button>
            <button onClick={() => scrollToElementOnTop("portfolio")}>
              Portfolio
            </button>
            <button onClick={() => scrollToElement("contact")}>Contact</button>
          </div>
          <div className={styles.contactButtonContainer}>
            <a href="public\Matias Tonelli CV Full-Stack.pdf" download>Download CV</a>
          </div>
        </div>
      )}
    </>
  );
}
