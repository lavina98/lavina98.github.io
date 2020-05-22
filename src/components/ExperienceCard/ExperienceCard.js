import React from 'react';
import './ExperienceCard.css';
class ExperienceCard extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <div className= "row1">
              <div className="column1">
                <img src={this.props.image}></img>
              </div>
              <div className="column2">
                {this.props.heading}
              </div>
          </div>
          <div className = "row2">
              {this.props.description}
          </div>
      </div>
    );
  }
 
}

export default ExperienceCard;
