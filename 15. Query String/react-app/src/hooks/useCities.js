import { useEffect, useState } from 'react';

const BASE_URL = `http://localhost:8000`;

export const useCities = ()=>
{
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>
    {
      //const controller = new AbortController();
      const fetchCities = async () =>
      {
        try 
        {
          setError("");
          setIsLoading(true);
          
  
          const res = await fetch(`${BASE_URL}/cities`);
  
          if(!res.ok && res.status !== 200)
          {
            throw new Error("Something went wrong with fetching cities");
          }
          const data = await res.json();
          if(data.Response === 'False')
          {
            throw new Error(data.Error)
          }
          setCities(data); 
          setError("");
        } 
        catch (error) 
        {
          if(error.name !== "AbortError")
          {
            setError(error.message);
          }
          
        }
        finally
        {
          setIsLoading(false); 
        }
      }
  
      fetchCities();
  
      return ()=>
      {
        //controller.abort();
      }
    }, []);

    return { cities, isLoading, error };
}