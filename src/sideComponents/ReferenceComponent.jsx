import React, { useState } from "react";
import style from "./ReferenceComponent.module.css";
import Rating from "@mui/material/Rating";

const ReferenceComponent = ({ name, img, position, text }) => {
  return (
    <div className={style.referenceComponent}>
      <Rating
        name="read-only"
        value={5}
        readOnly
        className={style.rating}
        sx={{
          color: "#852d7b",
          position: "relative",
          left: "16em",
          top: ".5em",
        }}
      />
      <div>
        <img src={img} alt="logo" />
        <h4>{name}</h4>
      </div>
      <span>{position}</span>
      <p>{text}</p>
    </div>
  );
};

export default ReferenceComponent;
