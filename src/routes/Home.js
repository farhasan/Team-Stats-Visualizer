import React from "react"
import ReactDOM from 'react-dom'
import Title from "../components/Title"
import CustomTeamChart from "../components/charts/CustomTeamChart"
import CustomTeamSelect from "./CustomTeamSelect"

import Loading from 'react-loading-components'

const NBA = require('nba');


class Home extends React.Component {

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
            playerNames.push(e.target.elements[i].value);
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
            let rebounds = (playerInfo[i].dreb + playerInfo[i].oreb) * playerInfo[i].gp;
            totalRebs += rebounds;
        };

        let totalTs = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            let threes = playerInfo[i].fG3M * playerInfo[i].gp;
            totalTs += threes;
        };

        let totalAsts = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            let assists = playerInfo[i].ast * playerInfo[i].gp;
            totalAsts += assists;
        };

        let totalStls = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            let steals = playerInfo[i].stl * playerInfo[i].gp;
            totalStls += steals;
        };

        let totalBlks = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            let blocks = playerInfo[i].blk * playerInfo[i].gp;
            totalBlks += blocks;
        };

        let totalTos = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            let tovs = playerInfo[i].tov * playerInfo[i].gp;
            totalTos += tovs;
        };

        let totalPts = 0;
        for(let i = 0; i < playerInfo.length; i++) {
            let points = playerInfo[i].pts * playerInfo[i].gp;
            totalPts += points;
        };


        this.setState({
            customTPM: totalTs,
            customREB: totalRebs,
            customAST: totalAsts,
            customSTL: totalStls,
            customBLK: totalBlks,
            customTO: totalTos,
            customPTS: totalPts,
            customTeam: playerNames,
            customLoading: false
        })

    };

    render() {
        return (
            <div>
                <Title/><br/>

                <CustomTeamSelect getPlayerData={this.getPlayerData}/>
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
            </div>
        );
    }
}

export default Home;