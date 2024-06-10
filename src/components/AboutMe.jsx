import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/src/assets/proba.jpg"
          alt="About me"
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <p>
          Zdravo! Moje ime je [Vaše Ime] i profesionalni sam lektor s
          višegodišnjim iskustvom u ispravljanju i uređivanju različitih
          tekstova. Bilo da se radi o akademskim radovima, poslovnim dokumentima
          ili književnim djelima, posvećen sam pružanju usluga lektorisanja koje
          garantuju tačnost, jasnoću i konzistentnost vašeg pisanja. <br />{" "}
          <br />
          Moje usluge obuhvataju ispravku gramatičkih, pravopisnih i stilskih
          grešaka, kako biste dobili besprijekoran i profesionalan tekst.
          Kontaktirajte me za vrhunsku uslugu lektorisanja koja će vaše tekstove
          podići na viši nivo!
        </p>
        <button className={styles.cvButton}>Skini CV</button>
      </div>
    </div>
  );
};

export default AboutMe;
