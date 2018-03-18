import React from "react"
import CustomTeamForm from "../components/forms/CustomTeamForm"
import CustomTeamChart from "../components/charts/CustomTeamChart"
import Navbar from "../Nav";
import Loading from "../components/Loading"
import DataTable from "../components/DataTable"

const NBA = require('nba');


class CustomTeamSelect extends React.Component {

    state = {
        customFG: undefined,
        customFT: undefined,
        customTPM: undefined,
        customREB: undefined,
        customAST: undefined,
        customSTL: undefined,
        customBLK: undefined,
        customTO: undefined,
        customPTS: undefined,
        customTeam: undefined,
    };


    getPlayerData = async (e) => {
        e.preventDefault();

        this.setState({
            customLoading: true
        });

        const playerNames = [];
        for (let i = 0; i < 15; i++) {
            if(e.target.elements[i].value === "") {}
            else {playerNames.push(e.target.elements[i].value);}
        }

        const playerInfo = [];
        for(let i = 0; i < playerNames.length; i++) {
            const player = await NBA.findPlayer(playerNames[i]);
            const pp = await NBA.stats.playerProfile({PlayerID: player.playerId});
            const pStats = pp['seasonTotalsRegularSeason'];
            const pRegStats = pStats[pStats.length-1];
            playerInfo.push(pRegStats);
        }

        let totalRebs = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            totalRebs += (playerInfo[i].dreb + playerInfo[i].oreb) * playerInfo[i].gp;
        };

        let totalTs = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            totalTs += playerInfo[i].fG3M * playerInfo[i].gp;
        };

        let totalAsts = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            totalAsts += playerInfo[i].ast * playerInfo[i].gp;
        };

        let totalStls = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            totalStls += playerInfo[i].stl * playerInfo[i].gp;
        };

        let totalBlks = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            totalBlks += playerInfo[i].blk * playerInfo[i].gp;
        };

        let totalTos = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            totalTos += playerInfo[i].tov * playerInfo[i].gp;
        };

        let totalPts = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            totalPts += playerInfo[i].pts * playerInfo[i].gp;
        };

        let totalFGM = 0;
        let attFG = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            totalFGM += playerInfo[i].fgm * playerInfo[i].gp;
            attFG += playerInfo[i].fga * playerInfo[i].gp;
        };

        const tfg = (totalFGM/attFG) * 100;

        let totalft = 0;
        let attft = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            totalft += playerInfo[i].ftm * playerInfo[i].gp;
            attft += playerInfo[i].fta* playerInfo[i].gp;
        };

        const ft = (totalft/attft) * 100;

        console.log(playerInfo);

        this.setState({
            customFG: Math.round(tfg),
            customFT: Math.round(ft),
            customTPM: Math.round(totalTs),
            customREB: Math.round(totalRebs),
            customAST: Math.round(totalAsts),
            customSTL: Math.round(totalStls),
            customBLK: Math.round(totalBlks),
            customTO: Math.round(totalTos),
            customPTS: Math.round(totalPts),
            customTeam: playerNames,
            customLoading: false
        });

    };

    render() {
        return (
            <div className="container">
                <Navbar/><br/>
                <div className="body">
                    {this.state.customLoading === true && <Loading/>}
                    <div className="form">
                        <CustomTeamForm getPlayerData={this.getPlayerData}/>
                    </div>
                    {this.state.customTeam &&
                    <CustomTeamChart
                        customTeam={this.state.customTeam}
                        cTPM={this.state.customTPM}
                        cREB={this.state.customREB}
                        cAST={this.state.customAST}
                        cSTL={this.state.customSTL}
                        cBLK={this.state.customBLK}
                        cTO={this.state.customTO}
                        cPTS={this.state.customPTS}
                    />}
                    {this.state.customTeam &&
                    <DataTable
                        FG={this.state.customFG}
                        FT={this.state.customFT}
                        TPM={this.state.customTPM}
                        REB={this.state.customREB}
                        AST={this.state.customAST}
                        STL={this.state.customSTL}
                        BLK={this.state.customBLK}
                        TO={this.state.customTO}
                        PTS={this.state.customPTS}
                    />}
                </div>
            </div>
        );
    }
}

export default CustomTeamSelect;