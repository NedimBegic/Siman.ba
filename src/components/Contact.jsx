import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TbBackground } from "react-icons/tb";
import style from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dqqw4gl",
        "template_tyeoas7",
        formData,
        "L-wL07daw_OG-OrMo"
      )
      .then((response) => {
        console.log("Email successfully sent!", response);
      })
      .catch((err) => {
        console.error("Error sending email:", err);
      });

    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <div id="contact" className={style.contact}>
      <h2>Kontakt</h2>
      <span>Imate pitanje ili projekat? Pišite nam!</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Vaše ime</label>
          <input
            type="text"
            name="name"
            placeholder="Unesite ime"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Vaš mail</label>
          <input
            type="email"
            name="email"
            placeholder="Unesite mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="number">Vaš broj</label>
          <input
            type="text"
            name="number"
            placeholder="Unesite broj"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Vaša poruka</label>
          <textarea
            name="message"
            placeholder="Unesite poruku"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pošalji poruku</button>
      </form>
    </div>
  );
};

export default Contact;
