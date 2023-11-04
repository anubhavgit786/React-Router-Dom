import React from "react";
import styles from "./styles.module.css";

const CountryItem = ({ country })=> 
{
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
