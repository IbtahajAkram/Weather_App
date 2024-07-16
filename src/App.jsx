import React, { useEffect, useState } from 'react'
// import { FaSearch } from 'react-icons/fa';
import './Weather.css';
import Cloud from './asset/Clouds.png'
import Rain from './asset/Rain.png'
import Clear from './asset/Clear.png'
import mist from './asset/mist.png'
const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [InputWeatherSearch, setWeatherSearch] = useState();
  const API_KEY = '9ec3faa0aa39f46f8e18aaab8251e402';
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${InputWeatherSearch}&appid=${API_KEY}`;
  const WeatherSearching = (e) => {
    setWeatherSearch(e.target.value);
    console.log(e.target.value);
  }
  const GetWeatherUpdate = async () => {
    const getUpdateCurrentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${InputWeatherSearch}&appid=${API_KEY}&units=metric`);
    const esayWording = await getUpdateCurrentWeather.json();
    console.log(esayWording);
    setCurrentWeather(esayWording);
  }
  const [dating, setDate] = useState('');
  const [timing, setTiming] = useState('');

  useEffect(() => {
    const DateArea = new Date();
    setDate(DateArea.toDateString());
  }, []);
  useEffect(() => {
    const TimeArea = new Date();
    setTiming(TimeArea.toLocaleTimeString());
  }, [])


  return (
    <>
      <h1></h1>
      <h1></h1>
      <div id='body'>
        <div className="app">
          <div className="weather-card">
            <div className="search-container">
              <input type="text" className="search-input" value={InputWeatherSearch} id="search-input" onChange={WeatherSearching} placeholder="Enter City or Location" />
              <button onClick={GetWeatherUpdate} className="search-button" id="search-button">🔎</button>
            </div>

            <div className='weather-descriptionTemp' >
              {
                currentWeather && currentWeather.weather ?
                  <div id='weatherContent' >
                    <h2>{currentWeather.name}</h2><br />
                    {currentWeather.weather[0].main == "Clouds" ? <img id='imgCloud' src={Cloud} /> : ""}
                    {currentWeather.weather[0].main == "Clear" ? <img id='imgRain' src={Clear} /> : ""}
                    {currentWeather.weather[0].main == "Rain" ? <img id='imgRain' src={Rain} /> : ""}
                    {currentWeather.weather[0].main === "Mist" ? <img id='imgRain' src={mist} /> : ""}
                    {currentWeather.weather[0].main === "Haze" ? <img id='imgRain' src={Cloud} /> : ""}
                    <h2 id='tempWeather'><br />{Math.trunc(currentWeather.main.temp)}°C</h2>
                    <h2>{currentWeather.weather[0].description}</h2 >

                  </div>
                  : "Weather Detail Show here!"
              }
            </div>
            <div style={{ marginTop: "-14px" }} className="weather-description">
              {timing}
            </div>
            <div className="weather-description">
              {dating}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather
