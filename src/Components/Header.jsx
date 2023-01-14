import React from "react";
import styles from "./components.module.scss";
export const Header = () => {
  return (
    <div className={styles["header-wrapper"]}>
      <img src="src/assets/logo.svg" alt="logo" />
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </div>
  );
};
