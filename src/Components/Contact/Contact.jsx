import React from "react";
import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import stylesContact from "./Contact.module.css";

import twitterIcon from "../../assets/twitter.svg";
import gitHubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import personIcon from "../../assets/envelope.svg";

export default function Contact() {
  const [input, setInput] = useState({});
  const [error, setErrors] = useState({});
  const form = useRef();

  const [isSmallerThan1000, setIsSmallerThan1000] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 1000px)");
    const handleMediaQueryChange = (event) => {
      setIsSmallerThan1000(event.matches);
    };
    setIsSmallerThan1000(mediaQueryList.matches);
    mediaQueryList.addListener(handleMediaQueryChange);
    return () => mediaQueryList.removeListener(handleMediaQueryChange);
  }, []);

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
    <>
      {isSmallerThan1000 ? (
        <div className={stylesContact.contactContainer} id="contact">
          <h3>Contact Me!</h3>
          <form
            onSubmit={handleSubmit}
            ref={form}
            className={stylesContact.contactForm}
          >
            <p className={stylesContact.eachInput}>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
                value={input.name}
              />
              {error.name ? (
                <p className={stylesContact.errorMessageForm}>{error.name}</p>
              ) : null}
            </p>
            <p className={stylesContact.eachInput}>
              Email:
              <input
                type="text"
                name="email"
                placeholder="Your email"
                onChange={handleChange}
                value={input.email}
              />
              {error.email ? (
                <p className={stylesContact.errorMessageForm}>{error.email}</p>
              ) : null}
            </p>
            <p className={stylesContact.eachInput}>
              Message:
              <input
                type="text"
                name="message"
                placeholder="Your message"
                onChange={handleChange}
                value={input.message}
              />
              {error.message ? (
                <p className={stylesContact.errorMessageForm}>{error.message}</p>
              ) : null}
            </p>
            <button type="submit" className={stylesContact.submitButton}>
              Send Message
            </button>
          </form>
          <hr />
          <p>This are my socials:</p>
          <div className={stylesContact.iconsContact}>
              <a
                href="https://github.com/MatiTonelli"
                target="_blank"
                className={`${stylesContact.socialButton} ${stylesContact.socialButtonGithub}`}
                aria-label="GitHub"
              >
                <img src={gitHubIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/matias-tonelli/"
                target="_blank"
                className={`${stylesContact.socialButton} ${stylesContact.socialButtonLinkedin}`}
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://twitter.com/matias_tonelli"
                target="_blank"
                className={`${stylesContact.socialButton} ${stylesContact.socialButtonTwitter}`}
                aria-label="Twitter"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a
                href="mailto:matias.tonelli@outlook.com"
                target="_blank"
                className={`${stylesContact.socialButton} ${stylesContact.socialButtonEmail}`}
                aria-label="Email"
              >
                <img src={personIcon} alt="Email" />
              </a>
            </div>
        </div>
      ) : (
        <div className={stylesContact.contactContainer} id="contact">
          <div className={stylesContact.contactSideInfoContainer}>
            <h3>Contact Me!</h3>
            <p>This are my socials:</p>
            <div className={stylesContact.iconsContact}>
              <a
                href="https://github.com/MatiTonelli"
                target="_blank"
                className={`${stylesContact.socialButton} ${stylesContact.socialButtonGithub}`}
                aria-label="GitHub"
              >
                <img src={gitHubIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/matias-tonelli/"
                target="_blank"
                className={`${stylesContact.socialButton} ${stylesContact.socialButtonLinkedin}`}
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://twitter.com/matias_tonelli"
                target="_blank"
                className={`${stylesContact.socialButton} ${stylesContact.socialButtonTwitter}`}
                aria-label="Twitter"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a
                href="mailto:matias.tonelli@outlook.com"
                target="_blank"
                className={`${stylesContact.socialButton} ${stylesContact.socialButtonEmail}`}
                aria-label="Email"
              >
                <img src={personIcon} alt="Email" />
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            ref={form}
            className={stylesContact.contactForm}
          >
            <p className={stylesContact.eachInput}>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
                value={input.name}
              />
              {error.name ? (
                <p className={stylesContact.errorMessageForm}>{error.name}</p>
              ) : null}
            </p>
            <p className={stylesContact.eachInput}>
              Email:
              <input
                type="text"
                name="email"
                placeholder="Your email"
                onChange={handleChange}
                value={input.email}
              />
              {error.email ? (
                <p className={stylesContact.errorMessageForm}>{error.email}</p>
              ) : null}
            </p>
            <p className={stylesContact.eachInput}>
              Message:
              <input
                type="text"
                name="message"
                placeholder="Your message"
                onChange={handleChange}
                value={input.message}
              />
              {error.message ? (
                <p className={stylesContact.errorMessageForm}>{error.message}</p>
              ) : null}
            </p>
            <button type="submit" className={stylesContact.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      )}
    </>
  );
}
