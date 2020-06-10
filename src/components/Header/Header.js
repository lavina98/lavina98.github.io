import React from "react";
import './Header.css';
import logo from '../../images/logo.png';
class Header extends React.Component {
    render() {
        return (
            <div id="nav">
                <ul>
                    <li id="logo" ><img id= "img_logo" src={logo}></img></li>
                    <li>Achievements</li>
                    <li>Education & Certifications</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>About Me</li>
                
                </ul>
            </div>
        );
    }
}

export default Header;