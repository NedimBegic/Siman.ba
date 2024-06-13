import React, { useState } from "react";
import style from "./ReferenceComponent.module.css";
import Rating from "@mui/material/Rating";

const ReferenceComponent = () => {
  return (
    <div className={style.referenceComponent}>
      <Rating name="read-only" value={5} readOnly sx={{ color: "#852d7b" }} />
      <h4>Nedim Begić</h4>
      <span>Client</span>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};

export default ReferenceComponent;
