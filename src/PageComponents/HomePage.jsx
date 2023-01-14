import React from "react";
import { Header } from "../Components/Header";
import { HomeHero } from "../Components/HomeHero";
import { Card } from "../Components/Card";
import styles from "./HomePage.module.scss";
import { Product } from "../Components/Product";
import { Footer } from "../Components/Footer";
export const HomePage = () => {
  const cards = [
    {
      src: "icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      p: "The ability to use a smartphone, tablet, or computer to access youraccount means your files follow you everywhere.",
    },
    {
      src: "icon-security.svg",
      title: "Security you can trust",
      p: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      src: "icon-collaboration.svg",
      title: "Real-time collaboration",
      p: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      src: "icon-any-file.svg",
      title: "Store any type of file",
      p: " Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <main className={styles["container"]}>
      <Header />
      <HomeHero />
      <div className={styles["card-container"]}>
        {cards.map((item, index) => (
          <Card key={index} data={item} />
        ))}
        <Product />
        <Footer />
      </div>
    </main>
  );
};
