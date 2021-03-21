import {useState} from "react";
import {useWeather} from "../hooks/useWeather";
import Weather from "./Weather";
const SearchState = ({url}) => {
    const [search,setSearch] = useState("Shanghai")
    const {weather: cities, loading, error} = useWeather(url);

    if(loading) return <h2>Loading ...</h2>
    if(error) return <h2>Error occured..</h2>
    return (
        <div className="search">
            <select value={search} onChange={e=>setSearch(e.target.value)}>
                {cities.data.map((city)=>(
                    <option value={city.capital}>
                        {city.name}-{city.capital}
                    </option>
                ))}
            </select>
            <Weather 
            url={`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dfa9444bc7335224d981bd57e439ee20`}
            />
        </div>
    )
}

export default SearchState
