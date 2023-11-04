import React from 'react';
import styles from "./styles.module.css";

import { formatDate } from '../../utilities';
import { Link } from 'react-router-dom';

const CityItem = ({ city }) => 
{
  const { cityName, emoji, date, id } = city;
  return (
    <li>
      <Link to={`${id}`} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>)
}

export default CityItem;
