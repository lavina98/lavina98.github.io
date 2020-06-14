import React from 'react';
import './Experience.css';
import Card from '../../components/Card/Card';
import forehotels from '../../images/forehotels.png';
import spit from '../../images/spit.png';
import microsoft from '../../images/microsoft.png';
import experience_image from '../../images/experience.png';

class Experience extends React.Component {
    render() {
        return (
            <div className="experience">
                <div className="experience_intro">
                    <img src={experience_image} className="exp_img"></img>
                    <div className="experience_content">
                        My internships , work experience in the industry which helped me understand the business
                        and apply the various computer science concepts I earned.
                    </div>
                </div>
                <div className="experience_cards">
                    <Card 
                        image = {spit}
                        heading = "Teaching Assistant"
                        timeperiod ="Jul 2019 - Nov 2019"
                        organisation ="Sardar Patel Institute of Technology"
                        location="Mumbai, Maharashtra"
                        description = "Teaching assistant for the subject of Object Orient Programming.Helped students understand the various OOP concepts. Explained the class diagrams and their breakdown to students."
                        toolsAndTechnologies =" Tools & Technologies - Java, Eclipse "
                    />
                    <br/>
                    <Card 
                        image = {microsoft}
                        heading = "Software Developer"
                        timeperiod ="May 2019- Jul 2019"
                        organisation ="Microsoft IDC"
                        location="Hyderabad, Telangana"
                        description = "Interned in the Dynamics CRM sales forcasting team . I developed a dashboard which showed the forecast pipleline management.The project helped improving the overall efficieny of a sales person."
                        toolsAndTechnologies =" Tools & Technologies -ReactJS, Javascript and other internal technologies"
                    />
                    <br/>
                    <Card 
                        image = {forehotels}
                        heading = "Application Developer"
                        timeperiod = "May 2018 - Jul 2018"
                        organisation ="Sardar Patel Technology & Business Incubator(SPTBI)"
                        location="Mumbai, Maharashtra"
                        description = "Developed 2 hybrid mobile applications.One application was for the job seekerswhere they can apply for job openings in the hotel induustry. The other app was for the hotels to post job openings."
                        toolsAndTechnologies =" Tools & Technologies -Ionic, NodeJS, MYSQL"
                    />
                </div>
            </div>
        );
    }
}  

export default Experience;
