import style from "./Reference.module.css";
import ReferenceComponent from "../sideComponents/ReferenceComponent";
const Reference = () => {
  return (
    <div>
      <div className={style.ref}>
        <ReferenceComponent />
        <ReferenceComponent />
        <ReferenceComponent />
      </div>
    </div>
  );
};

export default Reference;
