import React from "react";
import tyler from "../images/tyler.jpg"

export default function About() {
    
    const [school, setSchool] = React.useState(false)
    const [volleyball, setVolleyball] = React.useState(false)
    const [hobbies, setHobbies] = React.useState(false)

    function toggleSchool(){
        setSchool(prevSchool => !prevSchool)
    }
    function toggleVolleyball(){
        setVolleyball(prevVolleyball => !prevVolleyball)
    }
    function toggleHobbies(){
        setHobbies(prevHobbies => !prevHobbies)
    }

    let toggleSchoolClass = school ? "active" : ""
    let toggleVolleyballClass = volleyball ? "active" : ""
    let toggleHobbiesClass = hobbies ? "active" : ""
    
    return (
        <div id="about" className="about-section">
            <h3>About</h3>
                <div className="about-p">Thank you for visiting my website. I am a McMaster alumni and former varsity athlete looking to break into the tech world. Towards the end of my 5 year degree I was introduced to web development and immediately developed a passion for it. Since then I have been learning through various online courses, videos, and documentation while building multiple projects along the way. </div>
                <div className="buttons">
                    <button className={toggleSchoolClass} onClick={toggleSchool}>Education</button>
                    <button className={toggleVolleyballClass} onClick={toggleVolleyball}>Volleyball</button>
                    <button className={toggleHobbiesClass} onClick={toggleHobbies}>Hobbies</button>
                </div>
            <div className="about">
                <img className="tyler-pic" src={tyler} alt="Tyler"></img>
                <div className="about-item">
                    <div className={`about-box ${toggleSchoolClass}`}>
                        <h4>Education</h4>
                        <ul>
                            <li>McMaster University</li>
                            <li>Honours Bachelor of Applied Science - speicalizing in Human Behaviour</li>
                            <li>Relevant Coursework: Calculus, Stats, Research Methods</li>
                        </ul>
                    </div>
                </div>

                <div className="about-item">
                    <div className={`about-box ${toggleVolleyballClass}`}>
                        <h4>Volleyball</h4>
                        <ul>
                            <li>Competitive volleyball for 10 years</li>
                            <li>Played at volleyball powerhouse McMaster University</li>
                            <li>Won various team and individual awards</li>
                            <li>Part time coach</li>
                        </ul>
                    </div>
                </div>

                <div className="about-item">
                    <div className={`about-box ${toggleHobbiesClass}`}>
                        <h4>Hobbies</h4>
                        <ul>
                            <li>I love playing all kinds of sports</li>
                            <li>I enjoy hiking and adventures</li>
                            <li>Reading and learning new things</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}