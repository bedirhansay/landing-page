import React from "react";
import styles from "./components.module.scss";
export const Footer = () => {
  return (
    <footer>
      <div className={styles["container-footer"]}>
        <div className={styles["logo"]}>
          <img src="src/assets/logo.svg" alt="Logo" />
        </div>
        <div className={styles["footer-bottom"]}>
          <div className={styles["footer-address"]}>
            <img src="src/assets/icon-location.svg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className={styles["footer-com"]}>
            <div className={styles["item"]}>
              <img src="src/assets/icon-phone.svg" />
              <p>+1-543-123-4567</p>
            </div>
            <div className={styles["item"]}>
              <img src="src/assets/icon-email.svg" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className={styles["footer-menu"]}>
            <a href="#">About Us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
          </div>
          <div className={styles["footer-menu"]}>
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
