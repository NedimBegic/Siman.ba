import React from "react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment,
} from "react-icons/ai";
import styles from "./ContactInfo.module.css";

const ContactInfo = ({ foot }) => {
  return (
    <div
      className={`${styles.contactInfo} ${
        foot ? styles.transparentBackground : ""
      }`}
    >
      <h4>Info</h4>
      <div className={styles.infoItem}>
        <AiOutlinePhone className={styles.icon} />
        <span> - +387 61 398 551</span>
      </div>
      <div className={styles.infoItem}>
        <AiOutlineMail className={styles.icon} />
        <span> - od.siman033@gmail.com</span>
      </div>
      <div className={styles.infoItem}>
        <AiOutlineEnvironment className={styles.icon} />
        <span> - Trg međunarodnog prijateljstva 10</span>
      </div>
    </div>
  );
};

export default ContactInfo;
