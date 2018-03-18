import React from "react"
import Autosuggest from 'react-autosuggest';

const NBA = require('nba');
const teams = NBA.teams;


function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return teams.filter(language => regex.test(language.teamName));
}

function getSuggestionValue(suggestion) {
    return suggestion.teamName;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.teamName}</span>
    );
}

function preventReload(e) {
    e.preventDefault();
}

class RealTeamSearch extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            value,
            onChange: this.onChange
        };

        return (
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
        );
    }
}

export default RealTeamSearch;