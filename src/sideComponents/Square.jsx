import React from "react";
import style from "./Square.module.css";
import { FaCalendarAlt } from "react-icons/fa";

const Square = (props) => {
  const { item, left } = props;
  const alignmentClass = left ? style.textRight : "";
  return (
    <div
      className={`${style.square} ${alignmentClass} ${
        !props.active ? style.gray : ""
      }`}
    >
      <h4>{item.name}</h4>
      <p>{item.department}</p>
      <span>{item.one}</span>
      <span>{item.two}</span>
    </div>
  );
};

export default Square;
