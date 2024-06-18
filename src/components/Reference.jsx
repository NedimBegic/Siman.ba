import style from "./Reference.module.css";
import ReferenceComponent from "../sideComponents/ReferenceComponent";
import oslo from "../assets/oslo.png";
import ks from "../assets/ks.png";
const Reference = () => {
  return (
    <div className={style.refDiv}>
      <h3>Reference</h3>
      <span>Iskustva zadovoljnih klijenata i saradnika</span>
      <div className={style.ref}>
        <ReferenceComponent
          name={"Vildana Selimbegović"}
          img={oslo}
          position={"Glvana urednica dnevnog lista Oslobođenje"}
          text={
            "Riječ je o energičnoj, prodornoj i sposobnoj mladoj osobi sa veoma jakom voljom i principima. Kreativna, motivisana i otvorena za nove ideje, ali i sposobna da sve konce drži u rukama."
          }
        />
        <ReferenceComponent
          name={"Mr. sc. Tarik Humačkić"}
          position={"Stručna služba Vlade Kantona Sarajevo"}
          text={
            "Za kratko vrijeme Selma se pokazala kao vrlo stručna, pouzdana, vrijedna saradnica, komunikativna, pozitivna i tolerantna što je neophodno s obzirom na složenost sistema i obimnost posla u Stručnoj službi Vlade KS"
          }
          img={ks}
        />
      </div>
    </div>
  );
};

export default Reference;
