import React from "react"
import Autosuggest from 'react-autosuggest';
import players from "../../players.json"


function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return players.filter(language => regex.test(language.firstName + ' ' + language.lastName));
}

function getSuggestionValue(suggestion) {
    return suggestion.firstName + ' ' + suggestion.lastName;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.firstName + ' ' + suggestion.lastName}</span>
    );
}

function preventReload(e) {
    e.preventDefault();
}

class CustomTeamSearch extends React.Component {
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

export default CustomTeamSearch;