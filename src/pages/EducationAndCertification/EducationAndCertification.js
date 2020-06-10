import React from 'react';
import './EducationAndCertification.css';
import Card from '../../components/Card/Card';
import VerticalCard from '../../components/VerticalCard/VerticalCard';
import spit from '../../images/spit.png';
class EducationAndCertification extends React.Component {
    render() {
        return (
            <div>
                Education
                <Card 
                image = {spit}
                heading = "BE in Information Technology"
                timeperiod ="Aug 2016 - Present"
                description = "Completing my course of bachelor in engineering in Information Technology. Studied core computer subjects and data science. "
                toolsAndTechnologies ="Studied subjects like OOP, Data Structures & Algorithms, OS & Networking, Web Development & Database Management, Cybersecurity, Machine Learning, Data Science, Data Mining, Software Engineering"
                />
                Certification
                <VerticalCard 
                //image = {distributedSystem}
                heading ="AI for Everyone"
                subheading ="By deeplearning.ai"
                content = "Studied about how AI can be used in different industries to automate taska. Also studied about how sAI can be implemented in an organization step by step"
                link ="https://coursera.org/share/663aa60310a321b8730a7d751c0fb99c"
                buttonContent="View Certification"
                />
                <VerticalCard 
                //image = {distributedSystem}
                heading ="Social Networks"
                subheading ="By NPTEL"
                content = "Learnt about the different type of graphs, nodes, clusters, bridges. Also studied how information passes through a network. Tried coding exercises in Python with networkx library"
                link ="https://drive.google.com/open?id=1_nQYpUYYmmJKBPBq73zkt-PfjmKp-kiD"
                buttonContent="View Certification"
                />
            </div>
        );
    }
}  

export default EducationAndCertification;
