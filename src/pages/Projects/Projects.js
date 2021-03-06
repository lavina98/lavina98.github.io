import React from 'react';
import './Projects.css';
import VerticalCard from '../../components/VerticalCard/VerticalCard';
import distributedSystem from "../../images/distributed_cache.png";
import educationalPortal from "../../images/educational_portal.png";
import biometricAuth from "../../images/biometric_authentication.png";
import newsApp from "../../images/news_app.png";
import portfolioManagement from "../../images/portfolio_management.png";
import collegeActivity from "../../images/college_activity.png";
import sudokuSolver from "../../images/sudoku_solver.png";
import projects_image from "../../images/projects.png";
import diabetes_analysis from "../../images/diabetes_analysis.png"
class Projects extends React.Component {

    
    render() {
        return (
        <div className="projects_details">
            <div className="projects_intro">
                <img src={projects_image} className="projects_img"></img>
                <div className="projects_content">
                    Projects that I made keeping the user interest in mind. These projects taught me about the various steps
                    involved in creating any product - design thinking, making documentation , creating UML diagrams, coding and testing.

                </div>
            </div>
            <div className="projects_cards">
                <VerticalCard 
                image = {distributedSystem}
                heading ="Novel Timestamp based caching mechanism for distributed systems"
                subheading ="Technologies used- NodeJs, Javascript, Azure, Redis, Scalegrid"
                content = "Developed a hybrid caching mechanism that uses both local and global cache to increase the retrieval speed, give thelatest data and reduce latency."
                link ="https://github.com/violetviolinist/nicecache"
                buttonContent="View Project"
                />
                <VerticalCard 
                image = {educationalPortal}
                heading ="Educational Portal for Students of 11th and 12th"
                subheading ="Technologies used- Angular.js, Node.js, Python, Tensorflow"
                content = "Developed an education portal with a chatbot for students of 11th and 12th. Scrapped data from the NCERT textbook to give students relevant answer to their doubts. The portal also helped students with study material and giving tests."
                link ="https://github.com/lavina98/educational-chatbot"
                buttonContent="View Project"
                />
                <VerticalCard 
                image = {biometricAuth}
                heading ="Biometric Authentication System"
                subheading ="Technologies used- Angular.js, Node.js, Python"
                content = "Developed a biometric authentication system to authenticate to users to various websites using their biometrics as passwords"
                link ="https://github.com/lavina98/TigerAuth"
                buttonContent="View Project"
                />
                <VerticalCard 
                image = {newsApp}
                heading ="News App"
                subheading ="Technologies used- Angular.js, Node.js, Python, Google News API"
                content = "Developed a news app to give user authentic and customized news from different trusted sources."
                link ="https://github.com/lavina98/hackathon"
                buttonContent="View Project"
                />
                <VerticalCard 
                image = {portfolioManagement}
                heading ="Portfolio Management App"
                subheading ="Technologies used- Angular.js, Node.js, Alpha Vantage API"
                content = "Developed a Portfolio Management Website for a user to manage  stocks, see prices of shares, manage transactions and calculate net worth."
                link ="https://github.com/lavina98/Portfolio-Management-Backend"
                buttonContent="View Project"
                />
                <VerticalCard 
                image = {collegeActivity}
                heading ="College Activity Management"
                subheading ="Technologies used- Angular.js, Node.js, Python for scraping"
                content = "Developed a College activity management portal for students to track their timetable, manage attendance and get a list of the upcoming events and hackathons"
                link ="https://github.com/lavina98/SudoCode"
                buttonContent="View Project"
                />
                 <VerticalCard 
                image = {diabetes_analysis}
                heading ="Analysis and Predictions on Diabetes Dataset"
                subheading ="Technologies used- Python, Numpy, Pandas, Seaborn, sklearn, R"
                content = "Gained insights from the diabetes dataset, drew visualizations. Also developed prediction models on the dataset."
                link ="https://github.com/lavina98/AnalysisOnDiabetesDataset"
                buttonContent="View Project"
                />
                <VerticalCard 
                image = {sudokuSolver}
                heading ="SudoKu Solver"
                subheading ="Technologies used- C"
                content = "Developed a sudoku solver using elimination and backtracking techniques."
                link ="https://github.com/lavina98/SudokuSolver"
                buttonContent="View Project"
                />
                
            </div>
        </div>
        );
    }
}
 

export default Projects;