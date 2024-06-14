import React, { useState } from "react";
import style from "./ReferenceComponent.module.css";
import Rating from "@mui/material/Rating";

const ReferenceComponent = () => {
  return (
    <div className={style.referenceComponent}>
      <Rating
        name="read-only"
        value={5}
        readOnly
        sx={{
          color: "#852d7b",
          position: "relative",
          left: "15em",
          top: ".5em",
        }}
      />
      <div>
        <img src="" alt="logo" />
        <h4>Nedim Begić</h4>
      </div>
      <span>Client</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam
        placeat ea, praesentium dolores reiciendis corrupti in autem at
        expedita..
      </p>
    </div>
  );
};

export default ReferenceComponent;
