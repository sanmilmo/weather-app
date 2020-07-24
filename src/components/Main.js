import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Context from "../Context";
import Error from "./Error"
import DateTime from './DateTime';

const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();
  const api_call = async (e) => {
    //prevent page to refrest when form is submitted
    e.preventDefault();
    const location = e.target.elements.location.value;
    {
      /*/now I can inject the location variable inside the url */
    }
    if (!location) return setError("Please enter a valid city."), setWeather(null)
    const API_KEY = "017359035b9fc9c55068649bcf9a5ff5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    //template literals
    const request = axios.get(url);
    const response = await request;
    setWeather(response.data.main);
    setCity(response.data.name);
    setError(null);
  };

  weather && console.log(weather);

  return (
    <div className='main'>
      <Header />
      <Content>
        <DateTime />
        <Context.Provider value={{ api_call, weather, city}}>
          {/* if names of key and value are the same, "api_call: api_call"I can remove it   */}
          <WeatherSearch />
          {weather && <WeatherData />}
          {error && <Error error={error}/>}
        </Context.Provider>
      </Content>
    </div>
  );
};

export default Main;
