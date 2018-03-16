import React from "react"
import Title from "./components/Title"
import RealorCustomForm from "./components/RealorCustomForm"

class App extends React.Component {
    render() {
        return (
            <div>
                <Title/><br/>
                <RealorCustomForm/>
            </div>
        );
    }
}

export default App;