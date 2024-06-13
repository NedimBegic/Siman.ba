import style from "./Scelet.module.css";
import Line from "./Line";
import Circle from "./Circle";

const Scelet = () => {
  return (
    <div className={style.scelet}>
      <Circle />
      <Line />
      <Circle />
      <Line />
      <Circle />
      <Line />
      <Circle />
      <Line />
    </div>
  );
};

export default Scelet;
