import React from "react"
import ReactDOM from "react-dom"
import Title from "./components/Title"
import RealorCustomForm from "./components/RealorCustomForm"
import Chart from "./components/Chart"
import RealTeamSelect, {teamList} from "./components/RealTeamSelect"
import CustomTeamSelect from "./components/CustomTeamSelect"

const NBA = require('nba');
const constants = require('./constants');


function TeamChart() {
    //console.log(this);
    const td = App.getRealTeamData();
    console.log(td);
    return(
        <Chart/>
    );
};

class App extends React.Component {

    state = {
        teamName: undefined,
        season: undefined,
        FG: undefined,
        FT: undefined,
        TPM: undefined,
        REB: undefined,
        AST: undefined,
        STL: undefined,
        BLK: undefined,
        TO: undefined,
        PTS: undefined
    };

    getRealTeamData = async (e) => {
        e.preventDefault();

        console.log(e.target.elements);

        const teamName = e.target.elements[0].value;
        const season = e.target.elements[1].value;
        const teamData = await NBA.stats.teamSplits({TeamID: constants.teamList[teamName], Season: season});

        const td = teamData.overallTeamDashboard[0];


        this.setState(
            {
                teamName: teamName,
                season: season,
                TPM: td.fG3M * td.gp,
                REB: (td.dreb + td.oreb) * td.gp,
                AST: td.ast * td.gp,
                STL: td.stl * td.gp,
                BLK: td.blk * td.gp,
                TO: td.tov * td.gp,
                PTS: td.pts * td.gp
            }

        );

    };

    getPlayerData = (e) => {
        e.preventDefault();

        const playerNames = [];
        for (let i = 0; i < 15; i++) {
            playerNames.push(e.target.elements[i].value);
        }
        console.log(playerNames);

    };

    render() {
        return (
            <div>
                <Title/><br/>
                <RealTeamSelect getRealTeamData={this.getRealTeamData}/>
                {this.state.TPM &&
                <Chart
                    teamName={this.state.teamName}
                    season={this.state.season}
                    TPM={this.state.TPM}
                    REB={this.state.REB}
                    AST={this.state.AST}
                    STL={this.state.STL}
                    BLK={this.state.BLK}
                    TO={this.state.TO}
                    PTS={this.state.PTS}
                />}
                <CustomTeamSelect getPlayerData={this.getPlayerData}/>
            </div>
        );
    }
}

export default App;