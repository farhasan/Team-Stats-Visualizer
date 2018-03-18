import React from "react"
import CustomTeamSearch from "../search_components/CustomTeamSearch"


class CustomTeamForm extends React.Component {

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

export default CustomTeamForm;