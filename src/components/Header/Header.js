import React from "react";
import './Header.css';
import logo from '../../images/logo.png';
function Header() {
    return (
        <div id="nav">
            <ul>
                <li id="logo" ><img id= "img_logo" src={logo}></img></li>
                <li>Contact Me</li>
                <li>Education & Skills</li>
                <li>Projects</li>
                <li>Experience</li>
                <li>About Me</li>
               
            </ul>
        </div>
    );
}

export default Header;