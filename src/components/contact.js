import React from "react";
import Linkedin from "../images/linkedin.png"
import Gmail from "../images/gmail.png"
import Github from "../images/github.png"

export default function Contact() {
    return (
        <div id="contact" className="contact">
            <h3>Contact</h3>
            <div className="contact-container">
                <h5>Connect with me!</h5>
                <div className="social-logos">
                    <img 
                        onClick={()=> window.open("https://www.linkedin.com/in/tyler-pavelic-488073231/")}
                        alt="linkedin" src={Linkedin}>
                    </img>
                    <img
                        onClick={()=> window.open("mailto:tylerpav@gmail.com")}
                        alt="gmail" src={Gmail}>
                    </img>
                    <img
                        onClick={()=> window.open("https://github.com/Tylerp10?tab=repositories")}
                        alt="github" src={Github}>
                    </img>
                </div>
            </div>
        </div>
    )
}