import React from 'react';
import styles from "./styles.module.css";

import { formatDate } from '../../utilities';

const CityItem = ({ city }) => 
{
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>)
}

export default CityItem;
