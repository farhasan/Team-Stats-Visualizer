import React from "react"

class RealorCustomForm extends React.Component {
    render() {
        return (
            <div>
                <h3>Do you want to view the stats of a real team or of a custom team?</h3>
                <form>
                    <input type="radio" name="teamtype" value="real"/>Real Team<br/>
                    <input type="radio" name="teamtype" value="custom"/>Custom Team<br/>
                </form>
            </div>
        );
    }
}

export default RealorCustomForm;