import React from "react";
import Calculator from "../images/calculator.png"
import WeatherApp from "../images/weather-app.png"

export default function Projects() {
    return (
        <div id="projects" className="projects">
            <h3>Projects</h3>
                <div className="project-item">
                    <div className="project-p">
                    <h4>Calculator</h4>
                        A fully functioning calculator app that can evaluate any expression with the 4 basic mathematical operators. A clean look that works smoothly on both desktop and mobile devices.
                    <div className="project-btns">
                        <button
                            onClick={()=> window.open("https://capable-paprenjak-f40b6a.netlify.app")}
                            className="demo">Live demo</button>
                        <button
                            onClick={() =>window.open("https://github.com/Tylerp10/calculator")}
                            className="view-code">View code
                        </button>
                    </div>
                    </div>
                    <img alt="calculator website" src={Calculator}></img>
                </div>

                <div className="project-item">
                    <div className="project-p">
                    <h4>Weather App</h4>
                        A weather app built with React that can get the weather from thousands of different cities worldwide. Displays current forecast along with a 5 day forecast that include features such as; humidity, sunrise/sunset, wind speed, pressure, etc. 
                    <div className="project-btns">
                        <button
                            onClick={()=> window.open("https://tyler-weather.netlify.app")}
                            className="demo">Live demo</button>
                        <button 
                            onClick={()=> window.open("https://github.com/Tylerp10/weather-app")}
                            className="view-code">View code
                        </button>
                    </div>
                    </div>
                    <img className="weather-app-img" alt="weather app website" src={WeatherApp}></img>
                </div>
        </div>
    )
}