import React from "react"
import Autosuggest from 'react-autosuggest';
import players from "../players.json"
import CustomTeamSearch from "./search_components/CustomTeamSearch"

const NBA = require('nba');


function preventReload(e) {
    e.preventDefault();
}

class CustomTeamSelect extends React.Component {

    createPlayerSearch(num) {
        return (
            <div>
                <p>Player {num}</p>
                <CustomTeamSearch/><br/>
            </div>
        );
    }

    createPlayerSearches(){
        let playerSearches = [];
        for (let i = 1; i < 16; i++) {
            playerSearches.push(this.createPlayerSearch(i));
        };
        return playerSearches;
    }

    render() {
        return (
            <div>
                <h3>Choose players to add to your team</h3>
                <form onSubmit={this.props.getPlayerData}>
                    {this.createPlayerSearches()}<br/>
                    <button>Create Team</button>
                </form><br/><br/>
            </div>
        );
    }
}

export default CustomTeamSelect;