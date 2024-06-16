import style from "./Reference.module.css";
import ReferenceComponent from "../sideComponents/ReferenceComponent";
const Reference = () => {
  return (
    <div className={style.refDiv}>
      <h3>Reference</h3>
      <span>Iskustva zadovoljnih klijenata i saradnika</span>
      <div className={style.ref}>
        <ReferenceComponent />
        <ReferenceComponent />
        <ReferenceComponent />
      </div>
    </div>
  );
};

export default Reference;
