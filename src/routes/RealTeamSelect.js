import React from "react"
import RealTeamForm from "../components/forms/RealTeamForm"
import RealTeamChart from "../components/charts/RealTeamChart"

import Loading from 'react-loading-components'

const NBA = require('nba');
const constants = require('../constants');


class RealTeamSelect extends React.Component {

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

        this.setState({
            realLoading: true
        });

        const teamName = e.target.elements[0].value;
        const season = e.target.elements[1].value;

        console.log(teamName, season);

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
                PTS: td.pts * td.gp,
                realLoading: false
            }

        );

        console.log(this.state)

    };

    render() {
        return (
            <div>
                <RealTeamForm getRealTeamData={this.getRealTeamData}/>
                {this.state.realLoading === true &&
                <Loading type='ball_triangle' width={100} height={100} fill='#f44242'/>}
                {this.state.TPM &&
                <RealTeamChart
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
            </div>
        );
    }
}

export default RealTeamSelect;