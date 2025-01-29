import React from "react";
import Blackjack from "../images/blackjack.png"
import HoopScope from "../images/hoopscope.png"

export default function Projects() {
    return (
        <div id="projects" className="projects">
            <h3>Projects</h3>
                
                <div className="project-item">
                    <div className="project-p">
                    <h4>HoopScope</h4>
                        An NBA analytics platform that provides real-time player stats, betting odds from multiple sportsbooks, and machine learning-powered predictions. The app collects and processes data using Python (Flask) and various NBA APIs, while a linear regression model, trained on historical player performance and opponent strength, forecasts a player's upcoming points. Built with React (JavaScript, CSS, Material UI) for a seamless user experience.
                    <div className="project-btns">
                        <button
                            onClick={()=> window.open("https://www.hoopscope.ca")}
                            className="demo">Live demo</button>
                        <button 
                            onClick={()=> window.open("https://github.com/Tylerp10/NBA-Predictor")}
                            className="view-code">View code
                        </button>
                    </div>
                    </div>
                    <img className="weather-app-img" alt="hoopscope website" src={HoopScope}></img>
                </div>

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
                    <img alt="blackjack website" src={Blackjack}></img>
                </div>
        </div>
    )
}