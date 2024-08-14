import React from "react";
import styles from "./AboutMe.module.css";
import about from "../assets/about.jpg";
import cv from "../assets/cv.pdf";

const AboutMe = () => {
  return (
    <div id="about-me" className={styles.container}>
      {
        <div className={styles.imageContainer}>
          <img src={about} alt="About me" className={styles.image} />
        </div>
      }
      <div className={styles.textContainer}>
        <div>
          <h2 className={styles.o}>O &nbsp;</h2>
          <h2>meni</h2>
        </div>
        <p>
          Zdravo! Moje ime je Selma Demirović i profesionalna sam lektorica s
          višegodišnjim iskustvom u ispravljanju i uređivanju različitih
          tekstova. Bilo da se radi o akademskim radovima, poslovnim dokumentima
          ili književnim djelima, posvećena sam pružanju usluga lektorisanja
          koje garantuju tačnost, jasnoću i konzistentnost vašeg pisanja. <br />{" "}
          <br />
          Moje usluge obuhvataju ispravku gramatičkih, pravopisnih i stilskih
          grešaka, kako biste dobili besprijekoran i profesionalan tekst.
          Kontaktirajte me za vrhunsku uslugu lektorisanja koja će vaše tekstove
          podići na viši nivo!
        </p>

        <a href={cv} target="_blank" rel="noopener noreferrer">
          <button className={styles.cvButton}>Skini CV</button>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
