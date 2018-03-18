import React from "react"
import ReactDOM from 'react-dom'
import Navbar from "../Nav"

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <Navbar/><br/>
                <div className="body">
                    <h3>Use this tool to view the traditional stats of NBA teams! You can
                    view the stats of current or historical NBA teams, or you can select
                    players and view the collective stats of those players. Use that tool
                    to help you prepare for the Fantasy Basketball season!</h3><br/><br/>
                    <p>Built by Farhan Hasan</p>
                    <p>React app using NBA API and Charts.js</p>
                </div>
            </div>
        );
    }
}

export default Home;