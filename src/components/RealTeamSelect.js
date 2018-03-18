import React from "react"
import RealTeamSearch from "./RealTeamSearch"

const NBA = require('nba');


function preventReload(e) {
    e.preventDefault();
}

class RealTeamSelect extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.getRealTeamData}>
                    <h3>Select the team whose stats you want to view</h3>
                    <p>Team</p>
                    <RealTeamSearch/>
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