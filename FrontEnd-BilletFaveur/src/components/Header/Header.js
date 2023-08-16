import React, {Component} from 'react'
import PropTypes from "prop-types";
import authHeader from '../../actions/auth-header';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Header extends Component {
    state = {
        isConnected: null,
        ConnectedUser : null
    }

    componentDidMount() {
       /* var http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/', true);
        http.setRequestHeader("Access-Control-Allow-Origin", "http, https");
        http.setRequestHeader("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTONS");
        http.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        http.send();
        console.log(http.status);*/
        /*let headers = new Headers();

        headers.append('Content-Type', 'application/json');*:
      /* headers.append('Accept', 'application/json');
      
       headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/'); 
        headers.append('Access-Control-Allow-Origin-Headers', 'http://localhost:3000/');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('optionsSuccessStatus', '200');
        headers.append('GET', 'POST', 'OPTIONS');
        headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")*/
        const data = JSON.parse(localStorage.getItem('token'))
        this.setState({isConnected: data != null}, () => {
        })
        
        
    }

    render() {
        return (
            <div>
                <div class="loader" >
                    <div class="loader__figure"></div>
                </div>
                <svg class="hidden">
                    <svg id="icon-nav" viewBox="0 0 152 63">
                        <title>navarrow</title>
                        <path
                            d="M115.737 29L92.77 6.283c-.932-.92-1.21-2.84-.617-4.281.594-1.443 1.837-1.862 2.765-.953l28.429 28.116c.574.57.925 1.557.925 2.619 0 1.06-.351 2.046-.925 2.616l-28.43 28.114c-.336.327-.707.486-1.074.486-.659 0-1.307-.509-1.69-1.437-.593-1.442-.315-3.362.617-4.284L115.299 35H3.442C2.032 35 .89 33.656.89 32c0-1.658 1.143-3 2.552-3H115.737z"/>
                    </svg>
                </svg>
                <nav id="menu-wrap" class="menu-back cbp-af-header">
                    <div class="menu">
                        <a href="/">
                            <div class="logo">
                                <img src="img/logo.png" alt=""/>
                            </div>
                        </a>
                        <ul>
                            <li>
                                <a class="" href="/">Accueil</a>
                            </li>
                           {/* <li>
                                <a href="#">Espaces</a>
                                <ul>
                                    <li><a href="/ourRoom">Les Chambres</a></li>
                                    <li><a href="/meetingRoom">Salle de réunion</a></li>
                                    <li><a href="/meetingOffice">Les Bureaux</a></li>
                                </ul>
                               </li>*/}
                            
                            {/*<li>
                                <a href="#">Services</a>
                                <ul>
                                    <li><a href="/ourRoom">Search</a></li>
                                    <li><a href="/conditionGeneral">Terms &amp; Conditions</a></li>
                                    <li><a href="/service">Services</a></li>
                                    <li><a href="/menu">Restaurant&Menu</a></li>
                                    <li><a href="/gallery">Gallery</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/gallery">Gallery</a>
                            </li>
                            <li>
                                 <a href="/service">Services</a>
                            </li>*/}
                            {this.state.isConnected == true ?
                                <><li>
                                <a className="" href="#">Billets de Faveur</a>
                                <ul>
                                   {/*<li><a href="/add-compagnie/_add">Ajouter Compagnies</a></li>*/}
                                    <li><a href="/PieceJustificatives"> les PiècesJustificatives</a></li>
                                    <li><a href="/DemandeBillets">les demandes de Billets</a> </li>
                                    <li><a href="/DemandeBillets1">les demandes de Billets compagnies étrangeres</a> </li>
                                    <li><a href="/DemandeBillets2">les demandes de Billets  Tunisair express</a> </li>
                                    <li><a href="/DemandeBillets3">Chercher demande Billets</a> </li> 
                                    <li><a href="/add-DemandeBilletExcetionnelle/_add">Demande Exceptionnelle</a> </li> 
                                    <li><a href="/EmissionBillets">les émissions de Billets</a> </li>
                                    <li><a href="/donutchart">les statistiques</a> </li>
                                    <li><a href="/Membres">Chercher Membres</a> </li>
                                 {/*   <li>
25               <Link to="/Donutchart">Second Product</Link>
                            26             </li>*/}
                                    {/*<li><a href="/Motifs">Motifs</a></li>
                                    <li><a href="/Parcours">Parcours</a></li>
                                    <li><a href="/Pays">Pays</a></li>
                                    <li><a href="/TypeBillets"> types de Billets</a></li>
                            <li><a href="/TypeDecisions">Type Décisions</a></li>*/}
                                    
                                </ul>
                            </li> 
                          {/*  <li>
                                <a className="curent-page" href="#">Billets Exceptionnelle</a>
                                <ul>
                                   <li><a href="/add-compagnie/_add">Ajouter Compagnies</a></li>
                                    <li><a href="/add-DemandeBilletExcetionnelle/_add"> Demande Exceptionnelle</a></li>
                                    
                                    {/*<li><a href="/Motifs">Motifs</a></li>
                                    <li><a href="/Parcours">Parcours</a></li>
                                    <li><a href="/Pays">Pays</a></li>/add-DemandeBilletExceptionnelle/_add"
                                    <li><a href="/TypeBillets"> types de Billets</a></li>
                            <li><a href="/TypeDecisions">Type Décisions</a></li>
                                    
                                </ul>
                        </li> */}
                           


                            
                                
                                
                                
                                
                                
                                <li>
                                    <a className="" href="#">Profile</a>
                                    <ul>
                                       {/* <li><a href="/myprofile">My Profile</a></li>*/}
                                        <li><a href="/logout">Log out</a></li>
                                    </ul>
                                </li><li>
                                        <a className="" href="#">Paramétrages</a>
                                        <ul>
                                           {/*<li><a href="/add-compagnie/_add">Ajouter Compagnies</a></li>*/}
                                            <li><a href="/Compagnies">Compagnies</a></li>
                                            <li><a href="/Motifs">Motifs</a></li>
                                            <li><a href="/Parcours">Parcours</a></li>
                                            
                                           {/* <li><a href="/Pays">Pays</a></li>*/}
                                            <li><a href="/TypeBillets"> types de Billets</a></li>
                                            

                                            {/*<li><a href="/TypeDecisions">Type Décisions</a></li>*/}
                                            
                                        </ul>
                                    </li></>


                                :
                                <li>
                                    <a className="" href="#">Profile</a>
                                    <ul>
                                        <li><a href="/signup">SignUp</a></li>
                                        <li><a href="/signin">SignIn</a></li>
                                        
                                    </ul>
                                </li> 
                            }
                        </ul>
                    </div>
                </nav>
                <div class="scroll-to-top">
                </div>
            </div>

        )
    }
}