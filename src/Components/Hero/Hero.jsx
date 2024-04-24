import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (

     <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, i`m Douglas</h1>
            <p className={styles.description}>I`m a frontend developer with 8 months of experience using React and Node.JS, Reach out if you'd like to leam more!</p>
            <a href="mailto:i.douglasdcs@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>

        <img
            src={getImageUrl("hero/heroImage.png")}
            alt="Image of me" className={styles.heroImg}
        />


        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
);
}
