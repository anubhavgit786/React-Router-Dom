import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";


const Logo = ()=> 
{
  return (
  <Link to="/">
    <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
  </Link>);
}

export default Logo;
