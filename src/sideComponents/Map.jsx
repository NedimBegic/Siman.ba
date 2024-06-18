import style from "./Map.module.css";

function Map() {
  return (
    <iframe
      title="map"
      className={style.map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.5518474696523!2d18.341328775710153!3d43.84438944004492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c97fe0007d15%3A0xc97693b3a6fdea96!2sTrg%20me%C4%91unarodnog%20prijateljstva%2010%2C%20Sarajevo%2071000!5e0!3m2!1sbs!2sba!4v1718727193146!5m2!1sbs!2sba"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Map;
