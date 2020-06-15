import React from 'react';
import './EducationAndCertification.css';
import Card from '../../components/Card/Card';
import VerticalCard from '../../components/VerticalCard/VerticalCard';
import spit from '../../images/spit.png';
import education from '../../images/education.png';
class EducationAndCertification extends React.Component {
    render() {
        return (
            <div className="edu_and_cert">
                <div className="edu_intro">
                    <img src={education} className="edu_image"></img>
                    <div className="edu_content">
                        My education and certifications which have helped me understand the various 
                        techical concepts.
                    </div>
                </div>
                <div className="edu">
                    <h2>Education</h2>
                    <div className="edu_cards">
                        <Card 
                        image = {spit}
                        heading = "BE in Information Technology"
                        timeperiod ="Aug 2016 - Present"
                        organisation ="Sardar Patel Institute of Technology"
                        location="Mumbai, Maharashtra"
                        description = "Completing my course of bachelor in engineering in Information Technology. Studied core computer subjects and data science. "
                        toolsAndTechnologies ="Studied subjects like OOP, Data Structures & Algorithms, OS & Networking, Web Development & Database Management, Cybersecurity, Machine Learning, Data Science, Data Mining, Software Engineering"
                        />
                    </div>
                </div>
                <div className="certification">
                    <h2>Certification </h2>
                    <div className="cert_card_container">
                        <VerticalCard 
                        //image = {distributedSystem}
                        heading ="AI for Everyone"
                        subheading ="By deeplearning.ai"
                        content = "Studied about how AI can be used in different industries to automate taska. Also studied about how AI can be implemented in an organization in a  step by step way."
                        link ="https://coursera.org/share/663aa60310a321b8730a7d751c0fb99c"
                        buttonContent="View Certification"
                        />
                        <VerticalCard 
                        //image = {distributedSystem}
                        heading ="Social Networks"
                        subheading ="By NPTEL"
                        content = "Learnt about the different type of graphs, nodes, clusters, bridges. Also studied how information passes through a network. Tried coding exercises in Python with networkx library."
                        link ="https://drive.google.com/open?id=1_nQYpUYYmmJKBPBq73zkt-PfjmKp-kiD"
                        buttonContent="View Certification"
                        />
                        <VerticalCard 
                        //image = {distributedSystem}
                        heading ="Statistics with Excel and Tableau"
                        subheading ="By Suven"
                        content = "Learnt about the various inferential, deferential statistics techniques. Also learnt the different central tendencies and distributions. Plotted graphs in tableau and excel."
                        link ="https://drive.google.com/file/d/131eCzF_xLn5A-lWNVgcFJBb5EHJ3WvQm/view?usp=sharing"
                        buttonContent="View Certification"
                        />
                        <VerticalCard 
                        //image = {distributedSystem}
                        heading ="Data Analysis by R"
                        subheading ="By Suven"
                        content = " Explored the various datasets like titanic, iris. Cleaned them, visualized them and gained insights from them."
                        link ="https://drive.google.com/file/d/1EfDrGvnvFFRK6oD-135C08OV6bLYGH_i/view?usp=sharing"
                        buttonContent="View Certification"
                        />
                        <VerticalCard 
                        //image = {distributedSystem}
                        heading ="Data Structures and Algorithms"
                        subheading ="By Morgan Stanley"
                        content = "Learnt the various data structures like arrays, linked lists, trees, graphs. Also learnt the various algorithmic concepts like greedy and dynamic programming. Practised problems on Hackerrank"
                        link ="https://drive.google.com/file/d/1Dl7EQegM-O5x_JObCydVmyJsqlhLsHD9/view?usp=sharing"
                        buttonContent="View Certification"
                        />
                    </div>
                </div>
            </div>
        );
    }
}  

export default EducationAndCertification;
