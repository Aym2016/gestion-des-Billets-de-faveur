import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
//import Contact from './components/Pages/Contact';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './components/Index';
import {Provider} from 'react-redux';
import store from './store/store';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LogOut from "./components/Auth/LogOut";
import EditProfile from "./components/Auth/EditProfile";

import Home from './components/home.component';
import AboutUs from "./components/AboutUs";

import AddCompagnie from './components/Compagnie/AddCompagnie';
//import CreateMotifComponent from './components/Motifs/CreateMotifComponent';
//import Motifs from './components/Motifs/Motifs';

import AddParcours from './components/Parcours/AddParcours'; 
import CreateParcoursComponent from './components/Parcours/CreateParcoursComponent';
import Parcours from './components/Parcours/Parcours';
import CreatePaysComponent from './components/Pays/CreatePaysComponent';
import Pays from './components/Pays/Pays';
import CreateDemandeBilletComponent from './components/DemandeBillet/CreateDemandeBilletComponent'; 
import DemandeBillets from './components/DemandeBillet/DemandeBillets'; 
import DemandeBillets2 from './components/DemandeBillet/DemandeBillets2';
import CreateEmissionBilletComponent from './components/EmissionBillet/CreateEmissionBilletComponent'; 
import EmissionBillets from './components/EmissionBillet/EmissionBillets';
import CreatePieceJustificativeComponent from './components/PieceJustificative/CreatePieceJustificativeComponent'; 
import AddPieceJustificative from './components/PieceJustificative/AddPieceJustificative'; 
import PieceJustificatives from './components/PieceJustificative/PieceJustificatives';
import AddTypeBillet from './components/TypeBillet/AddTypeBillet'; 
import CreateTypeBilletComponent from './components/TypeBillet/CreateTypeBilletComponent'; 
import TypeBillets from './components/TypeBillet/TypeBillets';
import AddTypeDecision from './components/TypeDecision/AddTypeDecision';
import CreateTypeDecisionComponent from './components/TypeDecision/CreateTypeDecisionComponent'; 
import TypeDecisions from './components/TypeDecision/TypeDecisions'; 
import CreateMotifComponent from './components/Motif/CreateMotifComponent'; 
import Motifs from './components/Motif/Motifs';

//import home from './components/Motif/CreateMotifComponent'; 

import Compagnies from './components/Compagnie/Compagnies';
//import Header from './components/Header/Header';
import UpdateCompagnieComponent from './components/Compagnie/UpdateCompagnieComponent';
import CreateCompagnieComponent from './components/Compagnie/CreateCompagnieComponent';
import CreateDemandeBilletExceptionnelleComponent from './components/DemandeBillet/CreateDemandeBilletExceptionnelleComponent'; 
import DemandeBilletsCompagnieEtrangere from './components/DemandeBillet/DemandeBillets1'; 
import Login from './components/Auth/Login';
import DemandeBillets1 from './components/DemandeBillet/DemandeBillets1';
//import Piechart from './components/DemandeBillet/Piechart';
import DemandeBillets3 from './components/DemandeBillet/DemandeBillets3';
import Membres from './components/Membre/Membres';
import PieceJustificatives1 from './components/PieceJustificative/PieceJustificatives1';
import Donutchart from './components/DemandeBillet/Donutchart';
import BarChart from './components/DemandeBillet/Bar Chart';
//import ContactUsPage from "./ContactUsPage";
//import Polararea from './components/DemandeBillet/Polararea';
/*import Doughnutchart from './components/DemandeBillet/Doughnutchart';
import Linecharts from './components/DemandeBillet/Linecharts';
import SimpleChart from './components/DemandeBillet/SimpleChart';
import Barchart from './components/DemandeBillet/Barchart';*/
//import DonutChart from './components/DemandeBillet/Donutchart.Tsx';
//import Donutchart from './components/DemandeBillet/Donutchart';
//import DonutChart from './components/DemandeBillet/DonutChart';
//import Home from './components/home.component';


class App extends Component {
   
   componentDidMount(){
   
     
    }

    render() {
        return (
            <Provider store={store}>
                <Header/>
                <Router>
                    <Switch>
                    <Route exact component={SignIn} path="/signin"></Route>
                    <Route exact component={SignUp} path="/signup"></Route>
            
                       
                        
                        <Route exact component={Home} path="/home"></Route>
                        <Route exact component={AboutUs} path="/aboutUs"></Route>
                       
                        
                        <Route exact component={LogOut} path="/logout"></Route>
                        <Route exact component={EditProfile} path="/myprofile"></Route>
                      {/*  <Route exact component={Login} path="/login"></Route>*/}
                        <Route exact component={Index} path="/"></Route>
                        <Route exact component={AddCompagnie} path="/AddCompagnie"></Route>
                        <Route exact component={AddPieceJustificative} path="/AddPieceJustificative"></Route>
                        <Route exact component={AddParcours} path="/addParcours"></Route>
                        <Route exact component={AddTypeBillet} path="/addTypeBillet"></Route>
                        <Route exact component={AddTypeDecision} path="/addTypeDecision"></Route>
                        {/*<Route exact component={Compagnies} path="/Compagnies"></Route> */}
                        <Route path="/donutchart" component={Donutchart} />
                        <Route path="/barchart" component={BarChart}/>
                        {/*<Route exact component={UpdateCompagnieComponent} path="/AddCompagnie/:id/Up"></Route>*/}
                       
                        <Route path = "/add-compagnie/add" component = {CreateCompagnieComponent}></Route>
                        <Route exact component={Motifs} path="/Motifs"></Route> 
                        <Route path = "/add-motif/add" component = {CreateMotifComponent}></Route>
                        <Route exact component={Parcours} path="/Parcours"></Route> 
                        <Route path = "/add-Parcours/add" component = {CreateParcoursComponent}></Route>
                       {/* <Route exact component={Pays} path="/Pays"></Route> */}
                        <Route path = "/add-Pays/:id" component = {CreatePaysComponent}></Route>
                        <Route exact component={TypeBillets} path="/TypeBillets"></Route> 
                        <Route path = "/add-TypeBillet/:id" component = {CreateTypeBilletComponent}></Route> 
                        
                       {/* <Route path = "/Piechart" component = {Piechart}></Route>
                        <Route path = "/Linechart" component = {Linecharts}></Route>
                        */}
                      {/*  <Route path = "/Polararea" component = {Polararea}></Route> 
                        <Route path = "/Doughnutchart" component = {Doughnutchart}></Route>
                        <Route path = "/Barchart" component = {Barchart}></Route> 
                        <Route path = "/SimpleChart" component = {SimpleChart}></Route> */}
                    
25              {/* <Link to="/Donutchart">Second Product</Link>*/}
26             
                {/* <Route exact component={TypeDecisions} path="/TypeDecisions"></Route> 
                        <Route path = "/add-TypeDecision/:id" component = {CreateTypeDecisionComponent}></Route>*/}
                        <Route exact component={PieceJustificatives} path="/PieceJustificatives"></Route> 
                        <Route exact component={PieceJustificatives1} path="/PieceJustificatives1"></Route> 
                        <Route path = "/add-PieceJustificative/:id" component = {CreatePieceJustificativeComponent}></Route> 
                        <Route exact component={DemandeBillets} path="/DemandeBillets"></Route> 
                        <Route path = "/DemandeBillets" component = {DemandeBillets}></Route> 
                        <Route path = "/DemandeBillets1" component = {DemandeBillets1}></Route>
                        <Route path = "/DemandeBillets2" component = {DemandeBillets2}></Route>
                        <Route path = "/DemandeBillets3" component = {DemandeBillets3}></Route> 
                                           
                        <Route path = "/add-DemandeBilletExcetionnelle/_add" component = {CreateDemandeBilletExceptionnelleComponent}></Route>
                        <Route path = "/DemandeBilletsCompagnieEtrangere" component = {DemandeBilletsCompagnieEtrangere}></Route>
                        <Route path = "/addDemandeBillets/_add" component = {CreateDemandeBilletComponent}></Route>
                        <Route path = "/EmissionBillets" component = {EmissionBillets}></Route>
                        <Route path = "/add-EmissionBillet/:id" component = {CreateEmissionBilletComponent}></Route>
                        <Route path = "/Membres" component = {Membres}></Route> 
                        </Switch>
                        </Router>
               
                <Footer/>
                
            </Provider>
        );
    }

}


export default App;
