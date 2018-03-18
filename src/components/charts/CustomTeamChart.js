import React from "react"
import {Bar} from "react-chartjs-2"

class CustomTeamChart extends React.Component {

    state = {
        chartData: {
            labels: ['3PM', 'REB', 'AST', 'STL', 'BLK', 'TO', 'PTS'],
            datasets: [
                {
                    data: [
                        this.props.cTPM,
                        this.props.cREB,
                        this.props.cAST,
                        this.props.cSTL,
                        this.props.cBLK,
                        this.props.cTO,
                        this.props.cPTS
                    ],
                    label: "# of stat",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ]
                }
            ]
        }
    };

    render() {
        return (
            <div className="customTeamChart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Total Stats for Custom Team',
                            fontSize: 25
                        },
                        layout: {
                            padding: {
                                left: 20,
                                right: 20,
                                top: 10,
                                bottom: 10
                            }
                        },
                        scales: {
                            yAxes:[{
                                stacked: true,
                                ticks: {
                                    max: 15000
                                }
                            }]
                        }
                    }
                    }
                />
            </div>
        )
    }
};

export default CustomTeamChart;