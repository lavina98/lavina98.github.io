import React from 'react';
import './AchievementCard.css';
class AchievementCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
            <h2>{this.props.heading}</h2>
            {this.props.subheading}
        </div>
      );
  }

}

export default AchievementCard;
