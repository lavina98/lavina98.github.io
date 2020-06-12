import React from 'react';
import './VerticalCard.css';
class VerticalCard extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div  className= "verticalCard">  
          <img src={this.props.image} className="vertical_card_image"></img>
          <h3>{this.props.heading}</h3>
          <h4>{this.props.subheading}</h4>
          <p>{this.props.content}</p>
          <button className="vertical_card_button">
            <a href={this.props.link} target="_blank">
                {this.props.buttonContent}
            </a>
          </button>
       </div>
    );
  }
 
}

export default VerticalCard;
