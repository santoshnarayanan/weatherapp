import React from 'react'

function WeatherDetails() {
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className="wi wi-day-sunny"></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>23.99&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">sunny</div>
                        <div className="place">Mumbai, IN</div>
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
                                18:30 <br /> Sunset
                            </p>
                        </div>


                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                34 <br /> Humidity
                            </p>
                        </div>
                    </div>
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                67 <br /> Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                123 <br /> Wind
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default WeatherDetails;