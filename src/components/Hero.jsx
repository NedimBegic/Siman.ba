import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../assets/heroLarge.jpg";

const Hero = () => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
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
      <div className={styles.content}>
        <img src={""} alt="Center" className={styles.centerImage} />
        <h1>Your Name</h1>
        <p>Your slogan goes here</p>
      </div>
    </div>
  );
};

export default Hero;
