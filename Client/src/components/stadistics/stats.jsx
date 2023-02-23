import React, { Component } from "react";
import { Chart } from 'primereact/chart';


class stadistics extends Component{
    state ={}

    constructor(props) {
        super(props);

        this.chartData = {
            labels: ['Reservas sencillas', 'Reservas de cama doble'],
            datasets: [
                {
                    data: [10, 15],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ]
                }]
        };

        this.lightOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
        };
    }

    render(){
        return(
            <div>
                <div className="card text-center">
                <p className="text-center text-3xl">Estadisticas del último mes</p>
                    <div className="flex card-container blue-container overflow-hidden text-lg">
                        <div className="flex-grow-1 flex align-items-center justify-content-center border-round m-2 px-5 py-3 gray-color">
                            <Chart type="doughnut" data={this.chartData} options={this.lightOptions} />
                        </div>
                        <div className="flex-grow-1 flex align-items-center justify-content-center border-round m-2 px-5 py-3 gray-color">
                            <Chart type="doughnut" data={this.chartData} options={this.lightOptions} />
                        </div>
                        <div className="flex-grow-1 flex align-items-center justify-content-center border-round m-2 px-5 py-3 gray-color">
                            <Chart type="doughnut" data={this.chartData} options={this.lightOptions} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default stadistics;