import React, { useState } from "react";
import styles from "./Hero.module.css";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jfif";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.siman}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h3>SIMAN</h3>
      </div>
      <div className={styles.header}>
        <nav className={styles.navbar}>
          <a href="#about-me">O meni</a>
          <a href="#service">Usluge</a>
          <a href="#my-work">Iskustvo</a>
          <a href="#reference">Reference</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
      <div
        className={`${styles.mobileMenuButton} ${
          isMenuOpen ? styles.open : ""
        }`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#about-me" onClick={toggleMenu}>
            O meni
          </a>
          <a href="#service" onClick={toggleMenu}>
            Usluge
          </a>
          <a href="#my-work" onClick={toggleMenu}>
            Iskustvo
          </a>
          <a href="#reference" onClick={toggleMenu}>
            Reference
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Kontakt
          </a>
        </div>
      )}
      <div className={styles.content}>
        <img src={hero} alt="Center" className={styles.centerImage} />
        <h1>SIMAN</h1>
        <p>Selma Demirović</p>
        <a href="#contact">
          <button>KONTAKT</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
