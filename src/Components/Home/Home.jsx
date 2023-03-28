import React from "react";
import styles from "./Home.module.css";
import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { IconContext } from "react-icons";

import fotoHome from "../../assets/MatiPort.png";
import kinema from "../../assets/kinema.png";
import findYourActivity from "../../assets/findYourActivity.png";
import wcFixture from "../../assets/WCFixture.jpg";
import mailen from "../../assets/mailen.png";
import twitterIcon from "../../assets/gorjeo.png";
import gitHubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import personIcon from "../../assets/profile.png";

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
  const [input, setInput] = useState({});
  const [error, setErrors] = useState({});
  const form = useRef();

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate(e.target.name, {
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate("all", input);
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      emailjs
        .sendForm(
          "service_bm7473b",
          "template_t5esh4p",
          form.current,
          "ZtpONKjmydKKira42"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setInput({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const validate = (type, toValidate) => {
    let errors = {};
    if (type === "name" || type === "all") {
      if (!toValidate.name) {
        errors.name = "Name is required";
      } else if (toValidate.name.length < 4) {
        errors.name = "Name is invalid. Is too short";
      }
    }
    if (type === "email" || type === "all") {
      if (!toValidate.email) {
        errors.email = "Email is required";
      } else if (
        !toValidate.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        errors.email = "Email is invalid";
      }
    }
    if (type === "message" || type === "all") {
      if (!toValidate.message) {
        errors.message = "Message is required";
      } else if (toValidate.message.length < 10) {
        errors.message = "Message is invalid. At least 10 characters";
      }
    }
    return errors;
  };
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
      <div className={styles.aboutContainer} id="about">
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
      <div className={styles.proyectsBiggerContainer} id="portfolio">
        <h2>
          <u>
            <i>My projects</i>
          </u>
        </h2>
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
        </div>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactSideInfoContainer}>
          <h3>Contact Me!</h3>
          <p>This are my socials:</p>
          <div className={styles.iconsContact}>
            <a
              href="#"
              className={`${styles.socialButton} ${styles.socialButtonGithub}`}
              aria-label="GitHub"
            >
              <img src="src\assets\github.svg" alt="Bootstrap"/>
            </a>
            <a
              href="#"
              className={`${styles.socialButton} ${styles.socialButtonLinkedin}`}
              aria-label="LinkedIn"
            >
              <img src="src\assets\linkedin.svg" alt="Bootstrap"/>
            </a>
            <a
              href="#"
              className={`${styles.socialButton} ${styles.socialButtonTwitter}`}
              aria-label="Twitter"
            >
              <img src="src\assets\twitter.svg" alt="Bootstrap"/>
            </a>
            <a
              href="#"
              className={`${styles.socialButton} ${styles.socialButtonEmail}`}
              aria-label="Email"
            >
              <img src="src\assets\envelope.svg" alt="Bootstrap"/>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} ref={form} className={styles.contactForm}>
          <p className={styles.eachInput}>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Your name"
              onChange={handleChange}
              value={input.name}
            />
            {error.name ? (
              <p className={styles.errorMessageForm}>{error.name}</p>
            ) : null}
          </p>
          <p className={styles.eachInput}>
            Email:
            <input
              type="text"
              name="email"
              placeholder="Your email"
              onChange={handleChange}
              value={input.email}
            />
            {error.email ? (
              <p className={styles.errorMessageForm}>{error.email}</p>
            ) : null}
          </p>
          <p className={styles.eachInput}>
            Message:
            <input
              type="text"
              name="message"
              placeholder="Your message"
              onChange={handleChange}
              value={input.message}
            />
            {error.message ? (
              <p className={styles.errorMessageForm}>{error.message}</p>
            ) : null}
          </p>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
