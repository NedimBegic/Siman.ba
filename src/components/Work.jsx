import React, { useState, useEffect } from "react";
import style from "./Work.module.css";
import Scelet from "../sideComponents/Scelet";
import Square from "../sideComponents/Square";
import education from "../store/education";
import experience from "../store/experience";

const Work = () => {
  const [isEdukacijaActive, setIsEdukacijaActive] = useState(true);
  const [isIskustvoActive, setIsIskustvoActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 766);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleEdukacija = () => {
    setIsEdukacijaActive(true);
    setIsIskustvoActive(false);
  };

  const toggleIskustvo = () => {
    setIsEdukacijaActive(false);
    setIsIskustvoActive(true);
  };

  return (
    <div className={style.workSection}>
      <h3>Iskustvo</h3>
      <span>Stručnost stečena kroz godine rada</span>
      <div className={style.buttons}>
        <button
          onClick={toggleIskustvo}
          className={isIskustvoActive ? style.active : ""}
        >
          Edukacija
        </button>
        <button
          onClick={toggleEdukacija}
          className={isEdukacijaActive ? style.active : ""}
        >
          Iskustvo
        </button>
      </div>
      <div className={`${style.work}`}>
        <div
          className={`${style.left} ${
            isIskustvoActive ? style.active : style.inactive
          }`}
        >
          <Square item={education[0]} left={true} active={isIskustvoActive} />
          <Square item={education[1]} left={true} active={isIskustvoActive} />
          <Square item={education[2]} left={true} active={isIskustvoActive} />
          <Square item={education[3]} left={true} active={isIskustvoActive} />
        </div>

        <Scelet />

        <div
          className={`${style.right} ${
            isEdukacijaActive ? style.active : style.inactive
          }`}
        >
          <Square
            item={experience[0]}
            left={false}
            active={isEdukacijaActive}
          />
          <Square
            item={experience[1]}
            left={false}
            active={isEdukacijaActive}
          />
          <Square
            item={experience[2]}
            left={false}
            active={isEdukacijaActive}
          />
          <Square
            item={experience[3]}
            left={false}
            active={isEdukacijaActive}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
