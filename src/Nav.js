import React from "react"
import {NavLink} from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <h1 className="Title">Team Stats Visualizer!</h1>
                <ul className="Navbar">
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/teamstats">
                            <h3>Official Team Stats</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/customstats">
                            <h3>Build a Custom Team</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
};

export default Navbar;