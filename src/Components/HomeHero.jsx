import React from "react";
import styles from "./components.module.scss";

export const HomeHero = () => {
  return (
    <section
      id={styles["home-hero-wrapper"]}
      className={styles["home-hero-wrapper"]}
    >
      <div className={styles["home-hero-image"]}>
        <img src="src/assets/illustration-intro.png" alt="hero" />
      </div>
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="primary-button">Get Started</button>
    </section>
  );
};
