import React from "react";
import styles from "./Services.module.css";

const Services = ({ name, description, icon }) => {
  return (
    <div className={styles.service}>
      <div className={styles.icon}>{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Services;
