import React from "react";
import './ContactMe.css';
import Header from "../../components/Header/Header";
import contact from "../../images/contact_me.png";
import gmail from "../../images/gmail.png";
import github from "../../images/github.png";
import linkedIn from "../../images/linkedIn.png";
import medium from "../../images/medium.png";
class ContactMe extends React.Component {
    render() {
        return (
            <div className="me">
            <Header/>
            <div className="row">
                <div className="column">
                    <img src = {contact} id="contact"></img>
                </div>
                <div class="column">
                    <p> You can contact me via e-mail or LinkedIn.I sometimes write on medium too. </p>
                    <ul id="social_media">
                        <li>
                            <a href="https://github.com/lavina98" target="_blank">
                                <img src={github} className="social"/>   
                            </a>  
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/lavina-golani-01887414b/"target="_blank" >
                                <img src={linkedIn} className="social"/>
                            </a>
                        </li>
                        <li>
                            <a href="mailto: luvina1009@gmail.com " target="_blank">
                                <img src={gmail} className="social"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@luvina1009" target="_blank">
                                <img src={medium} className="social"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        );
    }
}

export default  ContactMe;