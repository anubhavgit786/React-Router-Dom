import React from 'react';
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import styles from "./styles.module.css"

const AppLayout = () => 
{
  return (
    <div className={styles.app}>
     <Sidebar/>
     <Map/>
    </div>
  )
}

export default AppLayout;