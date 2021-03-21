import './App.css';
import Header from "./components/Header";
import Weather from './components/Weather';
import SearchState from "./components/SearchState";
import Footer from './components/Footer';

function App() {
 

  return (
    <>
    <Header/>
    <div className="App">
      <Weather url="https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=dfa9444bc7335224d981bd57e439ee20"/>
      <SearchState url="https://countriesnow.space/api/v0.1/countries/capital"/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
