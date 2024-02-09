import React from "react";
import HTMLimg from "../images/Html.png"
import CSSimg from "../images/css.png"
import JSimg from "../images/javascript-39424.png"
import Reactimg from "../images/react.png"
import Nodeimg from "../images/node-js-icon-2.jpeg"
import Mongo from "../images/mongo.png"
import VScodeimg from "../images/vscode.png"
import GITimg from "../images/git.png"
import Figmaimg from "../images/figma.png"
import Bootstrap from "../images/bootstrap.png"

export default function Skills() {
    return (
        <div id="skills" className="skills">
            <h3>Skills</h3>
            <div className="skills-container">

                <figure>
                    <img alt="HTML" src={HTMLimg}></img>
                        <h4>HTML</h4>
                </figure>

                <figure>
                    <img alt="CSS" src={CSSimg}></img>
                        <h4>CSS</h4>
                </figure>

                <figure>
                    <img alt="Bootstrap" src={Bootstrap}></img>
                        <h4>Bootstrap</h4>
                </figure>

                <figure>
                    <img alt="JavaScript" src={JSimg}></img>
                        <h4>JavaScript</h4>
                </figure>

                <figure>
                    <img alt="React" src={Reactimg}></img>
                        <h4>React</h4>
                </figure>

                <figure>
                    <img alt="Node.js" src={Nodeimg}></img>
                        <h4>Node</h4>
                </figure>

                <figure>
                    <img alt="Mongo" src={Mongo}></img>
                        <h4>Mongo</h4>
                </figure>

                <figure>
                    <img alt="VScode" src={VScodeimg}></img>
                        <h4>VScode</h4>
                </figure>

                <figure>
                    <img alt="GIT" src={GITimg}></img>
                        <h4>GIT</h4>
                </figure>

                <figure>
                    <img alt="Figma" src={Figmaimg}></img>
                        <h4>Figma</h4>
                </figure>
            </div>
        </div>
    )
}