import React from "react";
import  AchievementCard from "../../components/AchievementCard/AchievementCard";
class Achievement extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <AchievementCard heading=" Won the Project Exhibition competition for final year Project"
                                 subheading=" Won the project exhibition for our Project - Distributed caching using Novel timestamp Method in our Department">
                </AchievementCard>
                <AchievementCard heading="GHCI student scholarship recipeint for 2019 "
                                 subheading="Won the GHCI scholorship to attend the 3 day event in Banglore in November 2019. ">
                </AchievementCard>
                <AchievementCard heading="Stood 3rd in my departent in the 3rd year"
                                 subheading="Stood 3rd in my department with a CGPA of 9.78 ">
                </AchievementCard>
                <AchievementCard heading="Finalist of Smart India Hackathon 2019 "
                                 subheading="One of the Top 4 teams for the Smart India Hackathon 2019 for the topic Biometric Authentication System held in IIT Roorke ">
                </AchievementCard>
                <AchievementCard heading="Zonal Finalist of the KPMG Innovation and Collaboration Challenge 2019 "
                                 subheading="Represnted our college in the zonal level of the Competition top solve problems related to eyesight issues in rural areas.   ">
                </AchievementCard>
                <AchievementCard heading=" Stood 2nd in my department in the 2nd year"
                                 subheading=" Stood 2nd in my department with a CGPA of 9.78">
                </AchievementCard>
            </div>
        );
    }

}

export default Achievement;