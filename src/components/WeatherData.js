import React, { useContext } from "react";
import Context from '../Context';

const WeatherData = () => {
    
    const  {weather, city} = useContext(Context)
    const {temp, humidity, pressure} = weather 
  return (
    <div >
      <p >
        Weather in {" "}
  <span >{city}</span>
      </p>
      <div >
        <span >
          <p>Temperature</p>
          <p>{temp}</p>
        </span>
        <span >
          <p>Humidity</p>
          <p>{humidity}</p>
        </span>
        <span >
          <p>Pressure</p>
          <p>{pressure}</p>
        </span>
      </div>
    </div>
  );
};

export default WeatherData;
