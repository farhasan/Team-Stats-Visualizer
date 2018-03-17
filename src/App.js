import React from "react"
import Title from "./components/Title"
import RealorCustomForm from "./components/RealorCustomForm"

import RealTeamSelect, {teamList} from "./components/RealTeamSelect"

const NBA = require('nba');
const constants = require('./constants');


class App extends React.Component {

    getRealTeamData = async (e) => {
        e.preventDefault();

        const teamName = e.target.elements[0].value;
        const season = e.target.elements[1].value;
        const teamData = await NBA.stats.teamSplits({TeamID: constants.teamList[teamName], Season: season});
        console.log(teamData.overallTeamDashboard[0]);
    };

    render() {
        return (
            <div>
                <Title/><br/>
                <RealTeamSelect getRealTeamData={this.getRealTeamData}/>
            </div>
        );
    }
}

export default App;