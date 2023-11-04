import React from 'react';
import styles from "./styles.module.css";
import { useSearchParams } from 'react-router-dom';

const Map = () => 
{
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={styles.mapContainer}>
      <div>
        position <span>{lat}</span>, <span>{lng}</span>
      </div> 
      <button onClick={()=>{ setSearchParams({ lat: 23, lng: 50})}}>Set position</button>    
    </div>
  )
}

export default Map;


