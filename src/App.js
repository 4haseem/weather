import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';


const api = {
  key: "0288a708b5342a169030e3b69ef31205",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [city, setCity] = useState("");

  const [checkweather, setCheckWeather] = useState({});


  function handleSearch() {
    fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
      .then((response) => response.json())
      .then((json) => {
        setCheckWeather(json);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
      <form>
        <h1>Check your city's weather</h1>

        <div className="Search">
          <SearchBar 
            type= "text"
            value= {city}
            placeholder= "enter city"
            onChange= {(e) =>setCity(e.target.value)}
          />

          <SearchButton onClick={handleSearch}>search</SearchButton>
        </div>
      </form>

         {typeof checkweather.main !== "undefined" ? (
           <div>
             <p>{checkweather.name}</p>

             <p>{checkweather.main.temp}°C</p>

             <p>{checkweather.weather[0].main}</p>

             <p>({checkweather.weather[0].description})</p>
           </div>
         ) : null }
      </header>
    </div>
  );
}

const SearchBar = styled.input`
  font-size: 18px;
  padding: 3px;
`;

const SearchButton = styled.button`
  &:hover{
    cursor: pointer;
  }
`;

export default App;
