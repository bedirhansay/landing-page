import styles from "./components.module.scss";

export const Product = () => {
  return (
    <section className={styles["solo-wrapper"]}>
      <img src="src/assets/illustration-stay-productive.png" alt="hero" />
      <div>
        <h1>Stay Productive Whereever You Are</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic
          voluptatibus eligendi suscipit neque nemo consequuntur error.
          <br />A adipisci distinctio, amet, architecto ex reiciendis, vero fuga
          numquam reprehenderit magnam cumque!
        </p>
        <a href="#">Read More!</a>
      </div>
    </section>
  );
};
