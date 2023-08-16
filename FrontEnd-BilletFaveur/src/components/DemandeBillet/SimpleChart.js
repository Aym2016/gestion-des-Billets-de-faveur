
import React, { Component } from "react";
import Chart from "react-apexcharts";
import DemandeBilletAction from "../../actions/DemandeBilletAction";

class SimpleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
  retrieveDemandeBillets2() {
    console.log("src/components/DemandeBillet/DemandeBillets2.js DemandeBillets2::retrieveDemandeBillets2()");
    DemandeBilletAction.getDemandeBillets()
      .then(response => {
        this.setState({
          DemandeBillets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
        <><div className="section big-55-height over-hide z-bigger">
        <div className="parallax parallax-top" style={{ backgroundImage: 'url(img/1.jpg)' }}></div>
        <div className="dark-over-pages"></div>

        <div className="hero-center-section pages">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 parallax-fade-top">
                        <div className="hero-text">les  Demandes de Billets d'avions</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div></>
    );
  }
}

export default SimpleChart;
