import React from "react";
import Blackjack from "../images/blackjack.png"
import WeatherApp from "../images/weather-app.png"

export default function Projects() {
    return (
        <div id="projects" className="projects">
            <h3>Projects</h3>
                <div className="project-item">
                    <div className="project-p">
                    <h4>Blackjack</h4>
                        A full-stack blackjack game that includes a user signup, sign in, and game component. Users must register to play and their information, such as name, email, password and balance are stored in a Mongo database. 
                    <div className="project-btns">
                        <button
                            onClick={()=> window.open("https://tyler-blackjack.netlify.app")}
                            className="demo">Live demo</button>
                        <button
                            onClick={() =>window.open("https://github.com/Tylerp10/blackjack")}
                            className="view-code">View code
                        </button>
                    </div>
                    </div>
                    <img alt="recipes website" src={Blackjack}></img>
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