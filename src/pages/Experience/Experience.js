import React from 'react';
import './Experience.css';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import forehotels from '../../images/forehotels.png';
import spit from '../../images/spit.png';
import microsoft from '../../images/microsoft.png';
class Experience extends React.Component {
    render() {
        return (
            <div>
            <ExperienceCard 
                image = {spit}
                heading = "Teaching Assistant"
                timeperiod ="Jul 2019 - Nov 2019"
                description = "Teaching assistant for the subject of Object Orient Programming.
                                Helped students understand the various OOP concepts. 
                                Explained the class diagrams and their breakdown to students."
                toolsAndTechnologies ="Java, Eclipse "
            />
            <ExperienceCard 
                image = {microsoft}
                heading = "Software Developer"
                timeperiod ="May 2019- Jul 2019"
                description = "Interned in the Dynamics CRM sales forcasting team . I developed a 
                                dashboard which showed the forecast pipleline management.
                                The project helped improving the overall efficieny of a sales person."
                toolsAndTechnologies =" ReactJS, Javascript and other internal technologies"
            />
            <ExperienceCard 
                image = {forehotels}
                heading = "Application Developer"
                timeperiod = "May 2018 - Jul 2018"
                description = "Developed 2 hybrid mobile applications.One application was for the job seekers
                                where they can apply for job openings in the hotel induustry. The other
                                app was for the hotels to post job openings."
                toolsAndTechnologies =" Ionic, NodeJS, MYSQL"
            />
            </div>
        );
    }
}  

export default Experience;
