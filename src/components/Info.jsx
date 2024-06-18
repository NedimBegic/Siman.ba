import style from "./Info.module.css";
import Map from "../sideComponents/Map";
import ContactInfo from "../sideComponents/ContactInfo";

const Info = () => {
  return (
    <section className={style.info}>
      <h2>Kontakt podaci</h2>
      <span>Povežite se s nama</span>
      <div>
        <aside></aside>
        <ContactInfo foot={false} />
        <Map />
      </div>
    </section>
  );
};

export default Info;
