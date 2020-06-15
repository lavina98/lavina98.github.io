import React from "react";
import './AboutMe.css';
import lg from "../../images/lg.png";
import gmail from "../../images/gmail.png";
import github from "../../images/github.png";
import linkedIn from "../../images/linkedIn.png";
import medium from "../../images/medium.png";
import Skill from "../../components/Skill/Skill";
import frontend from "../../images/frontend.png";
import backend from "../../images/backend.png";
import data_science from "../../images/data_science.png";
import machine_learning from "../../images/machine_learning.png";
import uxd from "../../images/uxd.png";
import cybersecurity from "../../images/cybersecurity.png";
class AboutMe extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        < div className="about_me">
            <div className="me">
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
                <div className="lg" >
                        <img src = {lg} className="lg_image" ></img>
                </div>
                <div id = "content">
                <div id="name">
                    <p>Hi! I'm Lavina Golani. </p>
                </div>
                <div id="details">
                    <p>Final year student in Sardar Patel Institute of technology.</p>
                    <p>Full Stack Developer, Machine Learning & Data Science Engineer.</p>
                
                </div>
                <div id ="motivation">
                    <p>I am extremely passionate about technology. Technology helps empower every individual. Today technology is used in every field right from healthcare to entertainment. The future is going to be amazing as well; ranging from ingestible pills to track your vitals to virtual reality techniques which will take us to different places while not being there. I am excited to contribute to our future.</p>
                </div>
            </div>
            </div>
            <div className="skill_content">
                <h2>My Skills</h2>
                <div className="skills">
                    <Skill
                        skill_image={frontend}
                        heading="Frontend Development"
                        languages="HTML, CSS, Javascript, Typescript"
                        frameworks_and_libraries =" React, Angular"
                    />
                    <Skill
                        skill_image={backend}
                        heading="Backend Development"
                        languages="Node js, SQL, NoSQL"
                        frameworks_and_libraries ="Express, MYSQL, MongoDB "
                    />
                    <Skill
                        skill_image={data_science}
                        heading="Data Science"
                        languages="Python"
                        frameworks_and_libraries =" Numpy, Pandas, Seaborn, Matplotlib"
                    />
                    <Skill
                        skill_image={machine_learning}
                        heading="Machine Learning & Deep Learning"
                        languages="Python"
                        frameworks_and_libraries =" Numpy, Pandas, Seaborn, Matplotlib, sklearn, tensorflow, openCV, nltk"
                    />
                    <Skill
                        skill_image={uxd}
                        heading="User Experience and Design"
                        languages="HTML, CSS"
                        frameworks_and_libraries ="Figma"
                    />
                    <Skill
                        skill_image={cybersecurity}
                        heading="CyberSecurity"
                        languages="Shell Script"
                        frameworks_and_libraries ="Linux, Kali Linux"
                    />

            </div>
            </div>
        </div>
    );
    
}
    
}

export default  AboutMe;