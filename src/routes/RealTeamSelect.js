import React from "react"
import RealTeamForm from "../components/forms/RealTeamForm"
import RealTeamChart from "../components/charts/RealTeamChart"
import Navbar from "../Nav"
import Loading from "../components/Loading"
import DataTable from "../components/DataTable"


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

        const teamData = await NBA.stats.teamSplits({TeamID: constants.teamList[teamName], Season: season});

        const td = teamData.overallTeamDashboard[0];


        this.setState(
            {
                teamName: teamName,
                season: season,
                FG: Math.round(td.fgPct * 100),
                FT: Math.round(td.ftPct * 100),
                TPM: Math.round(td.fG3M * td.gp),
                REB: Math.round((td.dreb + td.oreb) * td.gp),
                AST: Math.round(td.ast * td.gp),
                STL: Math.round(td.stl * td.gp),
                BLK: Math.round(td.blk * td.gp),
                TO: Math.round(td.tov * td.gp),
                PTS: Math.round(td.pts * td.gp),
                realLoading: false
            }
        );
    };

    render() {
        return (
            <div className="container">
                <Navbar/><br/>
                <div className="body">
                    {this.state.realLoading === true && <Loading/>}
                    <div className="form">
                        <RealTeamForm getRealTeamData={this.getRealTeamData}/>
                    </div>
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
                    {this.state.TPM &&
                    <DataTable
                        FG={this.state.FG}
                        FT={this.state.FT}
                        TPM={this.state.TPM}
                        REB={this.state.REB}
                        AST={this.state.AST}
                        STL={this.state.STL}
                        BLK={this.state.BLK}
                        TO={this.state.TO}
                        PTS={this.state.PTS}
                    />
                    }
                </div>
            </div>
        );
    }
}

export default RealTeamSelect;