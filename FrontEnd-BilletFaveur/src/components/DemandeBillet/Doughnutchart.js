import React, { Component } from 'react'  

import axios from 'axios';  

import {Doughnut} from 'react-chartjs-2';  

export class Doughnutchart extends Component {  

        render() {  
                return (  

                        <div>  

                                  

                        </div>  

                )  

        }  constructor(props) {  

                super(props);  
                this.state = { Data: {} ,
                corps :[],

                 fonction:[],
               /*  playername:[],
        runscore:[], */ };  

        }  

        componentDidMount() {  

            axios.get(`http://localhost:8080/api/test/rest/personnels`)  

            .then(res => {  

                    console.log(res);  

                    const ipl = res.data;  

                    let corps = [];  

                    let fonction = [];  

                    ipl.forEach(record => {  
                            this.state.corps.push(record.corps);  

                            this.state.fonction.push(record.fonction);  

                    });  

                    this.setState({  

                            Data: {  

                                    labels: this.state.corps,  
                                                datasets: [  

                                                        {  

                                                                label: 'IPL 2018/2019 Top Run Scorer',  

                                                                data: this.state.fonction,  

                                                                backgroundColor: [  

                                                                        "#3cb371",  

                                                                        "#0000FF",  

                                                                        "#9966FF",  

                                                                        "#4C4CFF",  

                                                                        "#00FFFF",  

                                                                        "#f990a7",  

                                                                        "#aad2ed",  

                                                                        "#FF00FF",  

                                                                        "Blue",  

                                                                        "Red"  

                                                                ]  

                                                        }  

                                                ]  

                                        }  
                                });  

                        })  

        }  

        render() {  

                return (  

                        <div>  

                      <Doughnut data={this.state.Data}  

                                        options={{ maintainAspectRatio: false }} ></Doughnut>  

                        </div>  

                )  

        }  

}  

  

export default Doughnutchart  