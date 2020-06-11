import React from "react";
import './AboutMe.css';
import lg from "../../images/lg.png";
import gmail from "../../images/gmail.png";
import github from "../../images/github.png";
import linkedIn from "../../images/linkedIn.png";
import medium from "../../images/medium.png";
class AboutMe extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="me">
          <img src = {lg} id="lg"></img>
          <div id = "content">
              <div id="name">
                  Hi! I'm Lavina Golani 
              </div>
              <div id="details">
                  Final year student in Sardar Patel Institute of technology.
                  <br/>
                  Full Stack Developer, Machine Learning & Data Science Engineer.
              
              </div>
              <div id ="motivation">
                  I am extremely passionate about technology. Technology helps empower every 
                  individual. Today technology is used in every field right from healthcare to
                  entertainment. The future is going to be amazing as well; ranging from ingestable 
                  pills to track your vitals to virtual reality techniques which will take us different 
                  places while not actually being there. I am excited to contribute to our future.
              </div>
           </div>
           <div className="contact">
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
    );
    
}
    
}

export default  AboutMe;