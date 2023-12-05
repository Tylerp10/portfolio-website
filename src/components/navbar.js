import React from "react";
import { Link } from "react-scroll";


export default function Navbar(){
    return (
        <div className="navbar">
            <h1 className="title">
                <span className="t">T</span>
                <span className="y">y</span>
                <span className="l">l</span>
                <span className="e">e</span>
                <span className="r">r</span>
                <span className="emoji">😎</span>
            </h1>
            <ul className="header-right">
                <li>
                    <Link to="about" smooth={true}>About</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true}>Projects</Link>
                </li>
                <li>
                <Link to="skills" smooth={true}>Skills</Link>
                </li>
                <li>
                <Link to="contact" smooth={true}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}