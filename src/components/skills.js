import React from "react";
import HTMLimg from "../images/Html.png"
import CSSimg from "../images/css.png"
import JSimg from "../images/javascript-39424.png"
import Reactimg from "../images/react.png"
import VScodeimg from "../images/vscode.png"
import GITimg from "../images/git.png"
import Figmaimg from "../images/figma.png"

export default function Skills() {
    return (
        <div id="skills" className="skills">
            <h3>Skills</h3>
            <div className="skills-container">
                <img alt="HTML" src={HTMLimg}></img>
                <img alt="CSS" src={CSSimg}></img>
                <img alt="JavaScript" src={JSimg}></img>
                <img alt="React" src={Reactimg}></img>
                <img alt="VScode" src={VScodeimg}></img>
                <img alt="GIT" src={GITimg}></img>
                <img alt="Figma" src={Figmaimg}></img>
            </div>
        </div>
    )
}