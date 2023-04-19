import React from "react";
import styles from "./Home.module.css";
import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";

import fotoHome from "../../assets/MatiPort.png";

import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.headingContainer} id="home">
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
      <div className={styles.aboutContainer} id="about">
        {/* about me */}
        <h2>
          <u>
            <i>About me</i>
          </u>
        </h2>
        <br />
        <p>
          Hi! I'm Matias, I'm 24 years old and recently graduated from Henry's
          Full-Stack Bootcamp and looking for a job. Before I started with the
          bootcamp I have been studying the career of Computer engineering in
          the University of Tres de Febrero (UNTREF). I advanced and complete on
          the branch of programming. I consider myself persistent, adaptative
          and self-didactic, I love videogames and programming. I want to keep
          learning more and more about this field, currently doing it. <br />{" "}
          See you!
        </p>
      </div>

      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
