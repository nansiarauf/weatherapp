import {useState,useEffect} from "react";
export function useWeather(url){
    const [weather,setWeather] = useState();
    const [error,setError] = useState();
    const [loading,setLaoding] = useState(true);
    
    useEffect(() => {
      const fetchData = async () =>{
          const data = await fetch(url)
          .then((res) => res.json())
          .catch((err) => setError(err));
          setWeather((data));
          setLaoding(false);
  
      }
      fetchData();
     
      
      
      
  },[url]);
  return{
      weather,loading,error
}
}