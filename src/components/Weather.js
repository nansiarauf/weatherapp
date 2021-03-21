import { useWeather } from "../hooks/useWeather"



const Weather = ({url}) => {
    const {weather,error,loading}=useWeather(url)
    
    if(loading) return <h2>Loading ...</h2>
    if(error) return <h2>Error occured..</h2>
    return (
        <div className="weather-card">
             <h1>City: {weather.name}</h1>
             <h3>Temperature: {weather.main.temp}K</h3>
             <h3>Humidity: {weather.main.humidity}%</h3>
             <h3>ATM Pressure: {weather.main.pressure}Pa</h3>
             <h3>Wind Speed: {weather.wind.speed}km/h</h3>
             <h3>Wind Direction: {weather.wind.deg}deg</h3>
                {weather.weather.map((weather)=>

                <h3>Sky: {weather.description}</h3>
                
      )}
        </div>
    )
}

export default Weather
