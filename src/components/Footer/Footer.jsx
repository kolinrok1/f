import React from "react";
import style from "./footer.module.css";

import INST from "./img/instagram.svg";
import BOOK from "./img/facebook.svg";
export const Footer = () => {
  return (
    <div className={style.center}>
      <div className={style.rigth}>
        Developed by <span className={style.rigthEl}>Kolinrok</span>
      </div>
      <div className={style.socials}>
        <a href="" className={style.link}>
          <img src={BOOK} alt="" />
        </a>
        <a href="">
          <img src={INST} alt="" />
        </a>
      </div>
    </div>
  );
};
