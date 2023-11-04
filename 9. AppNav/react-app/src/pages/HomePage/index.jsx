import React from "react";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

import PageNav from "../../components/PageNav";

const Homepage = ()=> 
{
  return (
    <main className={styles.homepage}>
      <PageNav/>
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="app" className="cta">Start Tracking Now</Link>
      </section>
    </main>
  );
}

export default Homepage;