import React from 'react';
import './Skill.css';
class Skill extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
        <div className="skill_card">
            <div className="skill_head">
                {this.props.heading}
            </div>
            <div>
                <img src={this.props.skill_image}></img>
            </div>
            <div className="skill_languages">
                <span className="lf">Languages: </span>{this.props.languages}
            </div>
            <div className="skill_frameworks">
            <span className="lf">Frameworks: </span>{this.props.frameworks_and_libraries}
            </div>
        </div>
        );
    }
}

export default Skill;