import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from './QuotaByCorps';
//import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}
/*var data = { 
    fonction:String, 
    sum:Number ,
 };*/

const Donutchart = () => {

    
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        
        axios.get(`http://localhost:8080/api/test/rest/CountByFunction`)
            .then(response => {
                
                let data
                
                  data = response.data as SaleSum[];
                const myLabels = data.map(x => x.fonction);
                
                const mySeries = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });
            });
    }, []);

    const options = {
        legend: {
            show: true
        }
    }


    return (
        <><div>
            <div className="section big-55-height over-hide z-bigger">
                <div className="parallax parallax-top" style={{ backgroundImage: 'url(img/1.jpg)' }}></div>
                <div className="dark-over-pages"><h3 className="text-center"></h3></div>

                <div className="hero-center-section pages">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 parallax-fade-top">
                                <div className="hero-text"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
            <Chart
                options={{ ...options, labels: chartData.labels }}
                series={chartData.series}
                type='donut'
    height='240' /></>
    );
}

export default Donutchart;





/*import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';*/
/*import Chart from 'react-apexcharts';
import { QuotaByCorps } from './QuotaByCorps';*/
//import {  } from 'QuotaByCorps';

/*type ChartData = {
    labels: string[];
    series: number[];
};

const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ 
        labels: [], 
        series: [],
     });

    useEffect(() => {

        axios.get("http://localhost:8080/api/test/rest/personnels")
        .then((response) => {

            const data = response.data as QuotaByCorps[];
            const myLabels = data.map(x => x.storeName); //montando uma lista so com os nome
            const mySeries = data.map(x => x.sum); //montando uma lista so com os totais

            //a lista no postman vem em pares, que seria o nome da loja e seu respectivo total
            //para poder exibir no grafico de pizza temos que fazer duas listas separadas e nao uma lista em pares (nome e total)
            //para poder exibir no grafico de pizza

            setChartData({
                series: mySeries,
                labels: myLabels
            })
        });
    }, []);

    const options = {
        legend: {
            show: true
        }
    };

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
      {/*  <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
    />*} 
    /*</>
    );
}

export default DonutChart;*/