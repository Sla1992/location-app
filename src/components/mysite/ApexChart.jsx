import React, {Component} from 'react';
import Chart from 'react-apexcharts'

class ApexChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            series: [{
                data: props.values
            }],
            options: {
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                xaxis: {
                    categories: props.labels,
                    labels: {
                        show: false,
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return val;
                        }
                    }
                },
                title: {
                    text: 'Dein Bild beinhaltet',
                    align: 'center'
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    }
                },
            },
        }
    }

    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" height={400}/>
        );
    }
}

export default ApexChart;