import React from "react";
import styles from "./components.module.scss";
export const Card = ({ data }) => {
  return (
    <div className={styles["card-wrapper"]}>
      <img src={`src/assets/${data.src}`} alt="hero" />
      <h2>{data.title}</h2>
      <p>{data.p}</p>
    </div>
  );
};
