import React from 'react'

class DataTable extends React.Component {
    render() {
        return (
            <table className="statTable" cellPadding="3">
                <tr>
                    <th>FG%</th>
                    <th>FT%</th>
                    <th>3PM</th>
                    <th>REB</th>
                    <th>AST</th>
                    <th>STL</th>
                    <th>BLK</th>
                    <th>TO</th>
                    <th>PTS</th>
                </tr>
                <tr>
                    <td>{this.props.FG}%</td>
                    <td>{this.props.FT}%</td>
                    <td>{this.props.TPM}</td>
                    <td>{this.props.REB}</td>
                    <td>{this.props.AST}</td>
                    <td>{this.props.STL}</td>
                    <td>{this.props.BLK}</td>
                    <td>{this.props.TO}</td>
                    <td>{this.props.PTS}</td>
                </tr>
            </table>
        )
    }
};

export default DataTable;