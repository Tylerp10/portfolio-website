import React from "react";
import Recipes from "../images/recpipes.png"
import WeatherApp from "../images/weather-app.png"

export default function Projects() {
    return (
        <div id="projects" className="projects">
            <h3>Projects</h3>
                <div className="project-item">
                    <div className="project-p">
                    <h4>Recipes</h4>
                        A recipe website that can search for any food/ingredient and provides over 300 meals to browse through. Each recipe displays the type of meal, instructions, and a video tutorial.  
                    <div className="project-btns">
                        <button
                            onClick={()=> window.open("https://tyler-recipes.netlify.app")}
                            className="demo">Live demo</button>
                        <button
                            onClick={() =>window.open("https://github.com/Tylerp10/recipes")}
                            className="view-code">View code
                        </button>
                    </div>
                    </div>
                    <img alt="recipes website" src={Recipes}></img>
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