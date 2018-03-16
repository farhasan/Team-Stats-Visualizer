import React from "react"
import Title from "./components/Title"
import RealorCustomForm from "./components/RealorCustomForm"
import RealTeamSelect from "./components/RealTeamSelect"

class App extends React.Component {
    render() {
        return (
            <div>
                <Title/><br/>
                <RealTeamSelect/>
            </div>
        );
    }
}

export default App;