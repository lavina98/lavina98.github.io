import React from 'react';
import './Card.css';
class Card extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card_container">
        <div  className= "card">  
                <div className="column1">
                    <img src={this.props.image} className="card_img"></img>
                </div>
                <div className="column2">
                    <span id= "titleHeading">
                        {this.props.heading}
                    </span>
                    <span id= "jobDuration">
                        {this.props.timeperiod}
                    </span>
                    <span id="jobContent">
                        {this.props.description}
                    </span>
                    <span id="toolsAndTechnologies">
                        {this.props.toolsAndTechnologies}
                    </span>
                </div>
        </div>
       </div>
    );
  }
 
}

export default Card;
