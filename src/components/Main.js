import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Context from "../Context";

const Main = () => {
  const [weather, setWeather] = useState();
  const api_call = async (e) => {
    //prevent page to refrest when form is submitted
    e.preventDefault();
    const API_KEY = "017359035b9fc9c55068649bcf9a5ff5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=${API_KEY}&units=metric`;
    //template literals
    const request = axios.get(url);
    const response = await request;
    setWeather(response.data.main);
  };

  weather && console.log(weather);

  return (
    <div className='main'>
      <Header />
      <Content>
        <Context.Provider value={{api_call, weather}}>
            {/* if names of key and value are the same, "api_call: api_call"I can remove it   */}
          <WeatherSearch />
          {weather && <WeatherData />}
        </Context.Provider>
      </Content>
    </div>
  ); 
};

export default Main;
