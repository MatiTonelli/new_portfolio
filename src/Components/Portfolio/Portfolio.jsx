import React from "react";
import styles from "./Portfolio.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import kinema from "../../assets/kinema.png";
import findYourActivity from "../../assets/findYourActivity.png";
import wcFixture from "../../assets/WCFixture.jpg";
import mailen from "../../assets/mailen.png";
import chakraIcon from "../../assets/chakraIcon.png";
import cssIcon from "../../assets/cssIcon.png";
import mongoIcon from "../../assets/mongoIcon.png";
import reactIcon from "../../assets/reactIcon.png";
import posgresIcon from "../../assets/posgresIcon.png";
import nodeIcon from "../../assets/nodeIcon.png";
import tippy, { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

setTimeout(() => {
  let proyectos = document.querySelectorAll("." + styles.eachProyectContainer);
  var w = window.innerWidth;
  console.log(w);
  proyectos.forEach((proy) => {
    if (w > 768) {
      proy.addEventListener("mouseover", () => {
        proy.classList.toggle(styles.proyectOnHover);
        proy.firstChild.firstChild.style.filter = "grayscale(0%)";
        proy.querySelector("ul").style.gap = "15px";
        let lis = proy.querySelector("ul").querySelectorAll("li");
        if (lis.length > 3) {
          if (lis.length == 3) {
            lis[0].classList.toggle(styles.iconsExternosOnHover);
            lis[1].classList.toggle(styles.iconsOnHover);
            lis[2].classList.toggle(styles.iconsExternosOnHover);
          } else {
            lis[0].classList.toggle(styles.iconsExternosOnHover);
            lis[1].classList.toggle(styles.iconsOnHover);
            lis[2].classList.toggle(styles.iconsOnHover);
            lis[3].classList.toggle(styles.iconsExternosOnHover);
          }
        } else {
          lis.forEach((li) => {
            li.classList.toggle(styles.iconsOnHover);
          });
        }
      });
      proy.addEventListener("mouseout", () => {
        proy.classList.toggle(styles.proyectOnHover);
        proy.firstChild.firstChild.style.filter = "grayscale(100%)";
        proy.querySelector("ul").style.gap = "10px";
        let lis = proy.querySelector("ul").querySelectorAll("li");
        if (lis.length > 3) {
          if (lis.length == 3) {
            lis[0].classList.toggle(styles.iconsExternosOnHover);
            lis[1].classList.toggle(styles.iconsOnHover);
            lis[2].classList.toggle(styles.iconsExternosOnHover);
          } else {
            lis[0].classList.toggle(styles.iconsExternosOnHover);
            lis[1].classList.toggle(styles.iconsOnHover);
            lis[2].classList.toggle(styles.iconsOnHover);
            lis[3].classList.toggle(styles.iconsExternosOnHover);
          }
        } else {
          lis.forEach((li) => {
            li.classList.toggle(styles.iconsOnHover);
          });
        }
      });
    }
  });
}, 500);

export default function Portfolio() {
  useEffect(() => {
    tippy("." + styles.techIcons, {
      inertia: true,
      placement: "right",
      duration: 500, // tiempo en milisegundos
      // transition-timing-function establece la curva de velocidad de la transición
      // aquí se utiliza una curva de velocidad que acelera gradualmente
      followCursor: true,
      plugins: [followCursor],
      className: styles.myTippy,
    });
  }, []);
  return (
    <div className={styles.proyectsBiggerContainer} id="portfolio">
      <h2>
        <u>
          <i>My projects</i>
        </u>
      </h2>
      <div className={styles.proyectsContainer}>
        <div
          className={[styles.eachProyectContainer, styles.project1].join(" ")}
          onClick={() => {
            window.open(
              "https://github.com/PG-Movies-Group-1/Kinema-Project",
              "_blank"
            );
          }}
        >
          <div>
            <img src={kinema} alt="" id="imagen" />
            <ul>
              <li>
                <img
                  src={chakraIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="Chakra UI"
                />
              </li>
              <li>
                <img
                  src={reactIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="React"
                />
              </li>
              <li>
                <img
                  src={mongoIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="MongoDB"
                />
              </li>
              <li>
                <img
                  src={nodeIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="NodeJS"
                />
              </li>
            </ul>
          </div>

          <h5>Kinema Entertainment</h5>
          <p>Movies and Series</p>
        </div>
        <div
          className={[styles.eachProyectContainer, styles.project2].join(" ")}
          onClick={() => {
            window.open("https://github.com/WCFixture/WCFixture", "_blank");
          }}
        >
          <div>
            <img src={wcFixture} alt="" id="imagen" />
            <ul>
              <li>
                <img
                  src={chakraIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="Chakra UI"
                />
              </li>
              <li>
                <img
                  src={reactIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="React"
                />
              </li>
              <li>
                <img
                  src={mongoIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="MongoDB"
                />
              </li>
              <li>
                <img
                  src={nodeIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="NodeJS"
                />
              </li>
            </ul>
          </div>
          <h5>WCFixture</h5>
          <p>Footbal and Bets</p>
        </div>
        <div
          className={[styles.eachProyectContainer, styles.project3].join(" ")}
          onClick={() => {
            window.open(
              "https://github.com/MatiTonelli/ProyectoPaises",
              "_blank"
            );
          }}
        >
          <div>
            <img src={findYourActivity} alt="" id="imagen" />
            <ul>
              <li>
                <img
                  src={cssIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="CSS"
                />
              </li>
              <li>
                <img
                  src={reactIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="React"
                />
              </li>
              <li>
                <img
                  src={posgresIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="PosgreSQL"
                />
              </li>
              <li>
                <img
                  src={nodeIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="NodeJS"
                />
              </li>
            </ul>
          </div>
          <h5>findYourActivity</h5>
          <p>Countries and Tourism</p>
        </div>
        <div
          className={[styles.eachProyectContainer, styles.project1].join(" ")}
          onClick={() => {
            window.open(
              "https://github.com/MatiTonelli/invitacion-digital-mailen",
              "_blank"
            );
          }}
        >
          <div>
            <img src={mailen} alt="" id="imagen" />
            <ul>
              <li>
                <img
                  src={chakraIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="Chakra UI"
                />
              </li>
              <li>
                <img
                  src={reactIcon}
                  alt=""
                  className={styles.techIcons}
                  data-tippy-content="React"
                />
              </li>
            </ul>
          </div>
          <h5>Mailen's invitation</h5>
          <p>Digital invitation</p>
        </div>
      </div>
    </div>
  );
}
