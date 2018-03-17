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

class RealTeamSelect extends React.Component {
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
            <div>
                <form onSubmit={this.props.getRealTeamData}>
                    <h3>Select the team whose stats you want to view</h3>
                    <p>Team</p>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />
                    <p>Season</p>
                    <select>
                        <option label="2017-18">2017-18</option>
                        <option label="2016-17">2016-17</option>
                        <option label="2015-16">2015-16</option>
                        <option label="2014-15">2014-15</option>
                        <option label="2013-14">2013-14</option>
                        <option label="2012-13">2012-13</option>
                        <option label="2011-12">2011-12</option>
                        <option label="2010-11">2010-11</option>
                        <option label="2009-10">2009-10</option>
                        <option label="2008-09">2008-09</option>
                        <option label="2007-08">2007-08</option>
                        <option label="2006-07">2006-07</option>
                        <option label="2005-06">2005-06</option>
                        <option label="2004-05">2004-05</option>
                        <option label="2003-04">2003-04</option>
                        <option label="2002-03">2002-03</option>
                        <option label="2001-02">2001-02</option>
                        <option label="2000-01">2000-01</option>
                        <option label="1999-00">1999-00</option>
                        <option label="1998-99">1998-99</option>
                        <option label="1997-98">1997-98</option>
                        <option label="1996-97">1996-97</option>
                    </select><br/><br/>
                    <button>Find</button>
                </form>
            </div>
        );
    }
}

export default RealTeamSelect;