import React from 'react';
import styles from './styles.module.css';


const Button = ({ children, onClick, type }) => 
{
  return (<button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>{children}</button>);
}

export default Button;
