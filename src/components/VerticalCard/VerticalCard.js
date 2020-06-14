import React from 'react';
import './VerticalCard.css';
class VerticalCard extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div  className= "verticalCard">  
          <div>
              <img src={this.props.image} className="vertical_card_image"></img>
          </div>
          <h3>{this.props.heading}</h3>
          <h4>{this.props.subheading}</h4>
          <div>
              <p>{this.props.content}</p>
          </div>
          <div className="div_vertical_card" >
            <button className="vertical_card_button" >
              <a href={this.props.link} target="_blank">
                  {this.props.buttonContent}
              </a>
            </button>
          </div>
       </div>
    );
  }
 
}

export default VerticalCard;
