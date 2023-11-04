import React from 'react';
import Spinner from '../Spinner';
import Message from '../Message';
import CountryItem from '../CountryItem';
import styles from "./styles.module.css";

const CountryList = ({ cities, isLoading, error }) => 
{
    const message = "Add your first city by clicking on a city on the map."
    const countries = cities.reduce((arr, city) => 
    {
        const isAlreadyPresent = arr.map((country)=> country.city).includes(city.country);
        if(isAlreadyPresent)
        {
            return arr;
        }
        return [...arr, { country: city.country, emoji: city.emoji, id: city.id }]
    }, [] )
  return (
    <>
    { isLoading &&  (<Spinner />) }
    { !isLoading && !error && cities.length !==0 &&(<ul className={styles.countryList}>{ countries.map((country)=> <CountryItem key={country.id} country={country}/> )}</ul>) }
    { !isLoading && !error && cities.length ===0 &&(<Message message={message}/>) }
    { error &&  (<p>💀{error}💀</p>)  }
    </>
  )
}

export default CountryList;
