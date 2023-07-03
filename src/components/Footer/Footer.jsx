import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://github.com/KrzysztofOlejniczak"
        target="_blank"
        rel="noopener noreferrer"
      >
        Krzysztof Olejniczak
      </a>
      .
    </footer>
  );
};

export default Footer;
