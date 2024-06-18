// Footer.jsx

import React from "react";
import ContactInfo from "../sideComponents/ContactInfo";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <h3>Sekcije</h3>
        <a href="#about-me" onClick={() => scrollToSection("about-me")}>
          O meni
        </a>
        <a href="#service" onClick={() => scrollToSection("service")}>
          Usluge
        </a>
        <a href="#my-work" onClick={() => scrollToSection("my-work")}>
          Iskustvo
        </a>
        <a href="#reference" onClick={() => scrollToSection("reference")}>
          Reference
        </a>
        <a href="#contact" onClick={() => scrollToSection("contact")}>
          Kontakt
        </a>
      </div>
      <ContactInfo foot={true} />
    </footer>
  );
};

export default Footer;
