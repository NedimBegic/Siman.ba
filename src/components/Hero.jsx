import React, { useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <img src={""} alt="Logo" className={styles.logo} />
        <nav className={styles.navbar}>
          <a href="#about-me">About Me</a>
          <a href="#service">Service</a>
          <a href="#my-work">My Work</a>
          <a href="#reference">Reference</a>
          <a href="#contact">Contact</a>
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
            About Me
          </a>
          <a href="#service" onClick={toggleMenu}>
            Service
          </a>
          <a href="#my-work" onClick={toggleMenu}>
            My Work
          </a>
          <a href="#reference" onClick={toggleMenu}>
            Reference
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
      <div className={styles.content}>
        <img src={""} alt="Center" className={styles.centerImage} />
        <h1>Your Name</h1>
        <p>Your slogan goes here</p>
      </div>
    </div>
  );
};

export default Hero;
