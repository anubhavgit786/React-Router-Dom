import React from 'react';
import styles from "./styles.module.css";

import { formatDate } from '../../utilities';
import { Link } from 'react-router-dom';

const CityItem = ({ city }) => 
{
  const { cityName, emoji, date, id, position } = city;
  const { lat, lng } = position;
  return (
    <li>
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>)
}

export default CityItem;
