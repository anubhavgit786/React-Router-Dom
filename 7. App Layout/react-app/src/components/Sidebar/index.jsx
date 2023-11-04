import React from 'react';
import styles from "./styles.module.css";
import Logo from "../Logo";
import AppNav from "../AppNav";
import Footer from "../Footer";

const Sidebar = () => 
{
  return (
    <div className={styles.sidebar}>
      <Logo/>
      <AppNav/>
      <Footer/>
    </div>
  )
}

export default Sidebar;
