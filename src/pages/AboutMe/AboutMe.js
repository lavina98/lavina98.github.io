import React from "react";
import './AboutMe.css';
import Header from "../../components/Header/Header";
import lg from "../../images/lg.png";
class AboutMe extends React.Component {
    render() {
        return (
        <div className="me">
          <Header/>
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
        </div>
    );
    }
    
}

export default  AboutMe;