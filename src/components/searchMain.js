import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
    const [searchCity, setSearchCity] = useState('Mumbai');
    const [tempInfo, setTempInfo] = useState({});

    //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    // key = 72644a9a1dff99dcd27dc90d416ce732
    //http://api.openweathermap.org/geo/1.0/direct?q=Pune,&appid=72644a9a1dff99dcd27dc90d416ce732
    //http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}


    const getWeatherInfo = async () => {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity},&appid=72644a9a1dff99dcd27dc90d416ce732`;

            let res = await fetch(url);
            let data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weatherType } = data.weather[0];
            const { name: cityName } = data;
            const { speed } = data.wind;
            const { sunset } = data.sys;

            const myNewWeatherInfo = {
                temp, humidity, pressure, weatherType, cityName, speed, sunset
            };

            setTempInfo(myNewWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, [])

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="Search City" id="search" value={searchCity} onChange={(e) => { setSearchCity(e.target.value) }} />
                </div>
                <button className="searchButton" onClick={getWeatherInfo}>
                    Search City
                </button>
            </div>
            <WeatherDetails />
        </>

    );
}

export default SearchMain;