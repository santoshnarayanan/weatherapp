import React from 'react'

function WeatherDetails(props) {
    //coverting sunrise bigint to integer
    let sec = props.sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className="wi wi-day-sunny"></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{props.temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{props.weatherType}</div>
                        <div className="place">{props.cityName}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr}  <br /> Sunset
                            </p>
                        </div>


                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {props.humidity} <br /> Humidity
                            </p>
                        </div>
                    </div>
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {props.pressure} <br /> Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {props.speed} <br /> Wind
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default WeatherDetails;