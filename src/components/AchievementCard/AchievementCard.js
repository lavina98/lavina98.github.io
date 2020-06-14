import React from 'react';
import './AchievementCard.css';
class AchievementCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="achievement_card">
            <p className="achieve_head">{this.props.heading}</p>
            <p className="achieve_subhead">{this.props.subheading}</p>
        </div>
      );
  }

}

export default AchievementCard;
