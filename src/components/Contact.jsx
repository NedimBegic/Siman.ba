import { TbBackground } from "react-icons/tb";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.contact}>
      <h2>Kontakt</h2>
      <span>Imate pitanje ili projekat? Pišite nam!</span>
      <form action="">
        <div>
          <label htmlFor="name">Vaše ime</label>
          <input type="text" placeholder="Unesite ime" />
        </div>
        <div>
          <label htmlFor="email">Vaš mail</label>
          <input type="text" placeholder="Unesite mail" />
        </div>
        <div>
          <label htmlFor="number">Vaš broj</label>
          <input type="text" placeholder="Unesite broj" />
        </div>
        <div>
          <label htmlFor="message">Vaša poruka</label>
          <textarea name="message" placeholder="Unesite poruku"></textarea>
        </div>
        <button>Pošalji poruku</button>
      </form>
    </div>
  );
};

export default Contact;
