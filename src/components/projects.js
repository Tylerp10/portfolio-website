import React from "react";
import Calculator from "../images/calculator.png"
import RPS from "../images/rps.png"

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
                    <h4>Rock Paper Scissors</h4>
                        A simple game of Rock Paper Scissors. The player has the selection to choose one of the three options which is then evaluated against a computers random selection. The winner and updated score is displayed after each round. 
                    <div className="project-btns">
                        <button
                            onClick={()=> window.open("https://soft-dragon-ae7b2e.netlify.app")}
                            className="demo">Live demo</button>
                        <button 
                            onClick={()=> window.open("https://github.com/Tylerp10/rock-paper-scissors")}
                            className="view-code">View code
                        </button>
                    </div>
                    </div>
                    <img alt="rock paper scissors website" src={RPS}></img>
                </div>
        </div>
    )
}