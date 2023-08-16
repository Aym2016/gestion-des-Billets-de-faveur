import React, { Component } from 'react'  

//import { Polar } from 'react-chartjs-2';  
import { Polar } from 'chart.js';
import axios from 'axios';  

  

export class Polararea extends Component {  

        constructor(props) {  

                super(props);  

                this.state = { Data: {} };  

        }  

        componentDidMount() {  

            axios.get(`http://localhost:8080/api/test/rest/personnels`)  

            .then(res => {  

                    console.log(res);  

                    const ipl = res.data;  

                    let corps = [];  

                    let fonction = [];  

                    ipl.forEach(record => {  
                            corps.push(record.corps);  

                            fonction.push(record.fonction);  

                    });  

                    this.setState({  

                            Data: {  

                                    labels: corps,   

                                                datasets: [  

                                                        {  

                                                                label: 'IPL 2018/2019 Top Run Scorer',  

                                                                data: fonction,  

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

                      <Polar data={this.state.Data}  

                   options={{ maintainAspectRatio: false }} />  

                        </div>  
                )  

        }  

}  

  

export default Polararea  