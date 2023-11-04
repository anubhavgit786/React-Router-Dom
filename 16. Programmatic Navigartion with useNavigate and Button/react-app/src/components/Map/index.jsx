import React from 'react';
import styles from "./styles.module.css";
import { useSearchParams, useNavigate } from 'react-router-dom';

const Map = () => 
{
  const navigate = useNavigate(); 
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={styles.mapContainer} onClick={()=> navigate("form")}>
      <div>
        position <span>{lat}</span>, <span>{lng}</span>
      </div> 
      <button onClick={()=>{ setSearchParams({ lat: 23, lng: 50})}}>Set position</button>    
    </div>
  )
}

export default Map;
