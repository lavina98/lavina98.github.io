import React from 'react';
import './ExperienceCard.css';
class ExperienceCard extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div  className= "card">  
              <div className="column1">
                  <img src={this.props.image}></img>
              </div>
              <div className="column2">
                  <div id="cardHeading" >
                      <span id= "titleHeading">
                            {this.props.heading}
                      </span>
                      <span id= "jobDuration">
                            {this.props.timeperiod}
                      </span>
                  </div>
                  <div id="jobContent">
                      {this.props.description}
                  </div>
                  <div id="toolsAndTechnologies">
                    Tools & Technologies - {this.props.toolsAndTechnologies}
                  </div>
              </div>
       </div>
    );
  }
 
}

export default ExperienceCard;
