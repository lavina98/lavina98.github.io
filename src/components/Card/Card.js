import React from 'react';
import './Card.css';
class Card extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div  className= "card">  
                <div className="column1">
                    <img src={this.props.image} className="card_img"></img>
                </div>
                <div className="column2">
                    <div className="heads1">
                       <span id= "titleHeading">
                            {this.props.heading}
                        </span>
                        <span id= "jobDuration">
                            {this.props.timeperiod}
                        </span>
                    </div>
                    <div className="heads2">
                       <span id= "org">
                            {this.props.organisation}
                        </span>
                        <span id= "loc">
                            {this.props.location}
                        </span>
                    </div>  
                    <div id="jobContent">
                        {this.props.description}
                    </div>
                    <div id="toolsAndTechnologies">
                        {this.props.toolsAndTechnologies}
                    </div>
                </div>
        </div>
    );
  }
 
}

export default Card;
