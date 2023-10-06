import React, { useState } from "react";
import "./style.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
    const [searchCity, setSearchCity] = useState('');
    console.log(searchCity);
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="Search City" id="search" value={searchCity} onChange={(e) => { setSearchCity(e.target.value) }} />
                </div>
                <button className="searchButton">
                    search city
                </button>
            </div>
            <WeatherDetails />
        </>

    );
}

export default SearchMain;