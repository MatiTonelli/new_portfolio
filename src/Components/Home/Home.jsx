import React from "react";
import styles from "./Home.module.css";

import fotoHome from "../../assets/matiPort.png";
import kinema from "../../assets/kinema.png";
import findYourActivity from "../../assets/findYourActivity.png";
import wcFixture from "../../assets/WCFixture.jpg";
import mailen from "../../assets/mailen.png";
import noImage from "../../assets/noImage.jpg";

setTimeout(() => {
  let proyectos = document.querySelectorAll("." + styles.eachProyectContainer);
  proyectos.forEach((proy) => {
    proy.addEventListener("mouseover", () => {
      proy.classList.toggle(styles.proyectOnHover);
      proy.firstChild.style.filter = "grayscale(0%)";
    });
    proy.addEventListener("mouseout", () => {
      proy.classList.toggle(styles.proyectOnHover);
      proy.firstChild.style.filter = "grayscale(100%)";
    });
  });
}, 500);

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.headingContainer}>
        {/* heading  */}
        <div className={styles.titles}>
          <h1>
            <i>
              Hey! I'm <p id={styles.nombre}>Matias</p>,<br></br> Full-Stack
              Developer
            </i>
          </h1>
          <br />
          <h3>
            <i>Welcome to my portfolio!</i>
          </h3>
          <br />
          <div className={styles.skillsContainer}>
            <button>JavaScript</button>
            <button>React Js</button>
            <button>MongoDB</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.circleHeading}>
            <div className={styles.cutterCircle}>
              <img className={styles.fotoHome} src={fotoHome} alt="" />
            </div>
          </div>
          <div className={styles.rectangleHeading}></div>
        </div>
      </div>
      <br />
      <div className={styles.aboutContainer}>
        {/* about me */}
        <h2>
          <u>
            <i>About me</i>
          </u>
        </h2>
        <br />
        <p>
          Hi! I'm Matias, I'm 24 years old, I recently graduated from Henry's
          Full-Stack Bootcamp and looking for job. Before I entered the bootcamp
          I been studying the career of Computer engineering in the University
          of Tres de Febrero (UNTREF). I advanced and complete on the branch of
          programming. I consider myself a person who is persistent, adaptative
          and self-didactic, I love videogames and programming. I want to keep
          learning more and more about this field, currently doing it. <br />{" "}
          See yah'!
        </p>
      </div>
      <br />
      <div className={styles.proyectsBiggerContainer}>
        <div className={styles.proyectsContainer}>
          <div
            className={[styles.eachProyectContainer, styles.project1].join(" ")}
          >
            <img src={kinema} alt="" />
            <div>I</div>
            <h5>Kinema Entertainment</h5>
            <p>Movies and Series</p>
          </div>
          <div
            className={[styles.eachProyectContainer, styles.project2].join(" ")}
          >
            <img src={wcFixture} alt="" />
            <div>II</div>
            <h5>WCFixture</h5>
            <p>Footbal and Bets</p>
          </div>
          <div
            className={[styles.eachProyectContainer, styles.project3].join(" ")}
          >
            <img src={findYourActivity} alt="" />
            <div>III</div>
            <h5>findYourActivity</h5>
            <p>Countries and Tourism</p>
          </div>
        </div>
        <div className={styles.proyectsContainer}>
          <div
            className={[styles.eachProyectContainer, styles.project1].join(" ")}
          >
            <img src={mailen} alt="" />
            <div>IV</div>
            <h5>Mailen's invitation</h5>
            <p>Digital invitation</p>
          </div>
          <div
            className={[styles.eachProyectContainer, styles.project2].join(" ")}
          >
            <img src={noImage} alt="" />
            <div>?</div>
            <h5>Coming Soon</h5>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
