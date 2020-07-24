import React, { useContext } from "react";
import Context from "../Context";

const WeatherSearch = () => {
  const { api_call } = useContext(Context);
  return (
    <div>
      <form onSubmit={api_call}>
        <input
        name="location"
          autoComplete='off'
          className='weather-search__input'
          type='text'
        />
        <div >
          <button>search</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
