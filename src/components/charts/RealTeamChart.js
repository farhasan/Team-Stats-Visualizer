import React from "react"
import {Bar} from "react-chartjs-2"

class RealTeamChart extends React.Component {

    state = {
        chartData: {
            labels: ['3PM', 'REB', 'AST', 'STL', 'BLK', 'TO', 'PTS'],
            datasets: [
                {
                    data: [
                        this.props.TPM,
                        this.props.REB,
                        this.props.AST,
                        this.props.STL,
                        this.props.BLK,
                        this.props.TO,
                        this.props.PTS
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
        },
        loaded: false
    };

    setChartData() {
        return {
            labels: ['3PM', 'REB', 'AST', 'STL', 'BLK', 'TO', 'PTS'],
            datasets: [
                {
                    data: [
                        this.props.TPM,
                        this.props.REB,
                        this.props.AST,
                        this.props.STL,
                        this.props.BLK,
                        this.props.TO,
                        this.props.PTS
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
        console.log(this);
        return (
                <div className="realTeamChart">
                    <Bar
                        data={this.setChartData()}
                        options={{
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: 'Total Stats for ' + this.props.teamName + ' in ' + this.props.season,
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
                                        max: 10000
                                    }
                                }]
                            }
                        }
                        } redraw
                    />
                </div>
            )
        }
};

export default RealTeamChart;