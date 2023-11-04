import React from 'react'
import styles from "./styles.module.css";

const Footer = () => 
{
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; Copyright { new Date().getFullYear() } by WorldWise Inc.</p>
    </footer>
  )
}

export default Footer;
