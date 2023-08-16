import React, {Component} from 'react'
//import './Auth.css'
import Axios from 'axios'
import {URL} from '../../keys'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
/*<div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail1">Code</label>
                                            <input type="text" name="code" defaultValue={code}
                                                   onChange={this.inputValueChange} className="form-control" required
                                                   id="exampleInputEmail1" aria-describedby="emailHelp"
                                                   placeholder="Enter nouveau compagnie"/>
                                        </div>*/
// import 'font-awesome/css/font-awesome.min.css'
export default class AddTypeBillet extends Component {

    constructor() {
        super()
        this.state = {
            id: null,
            libelle: '',
            
        }
    }

    componentWillMount() {
        if (localStorage.getItem("token") != null) {
            this.props.history.push('/')
        }
    }

    inputValueChange = e => this.setState({[e.target.name]: e.target.value});
    AddTypeBillet = (event) => {
        // event.preventDefault()   
        console.log(this.state);

        Axios.post(URL + '/typeBillet/save', this.state)
            .then(response => {
                console.log(response.data);
                window.location.reload(false);
                //this.props.history.push('/signin')
            })
            .catch(error => console.log(error))
    }
    


    render() {
        const {libelle} = this.state
        return (
            <div>
                <div className="section big-55-height over-hide z-bigger">
                    <div className="parallax parallax-top" style={{backgroundImage: 'url(img/1.jpg)'}}></div>
                    <div className="dark-over-pages"></div>

                    <div className="hero-center-section pages">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 parallax-fade-top">
                                    <div className="hero-text">ajouter un type de billet</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pad">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card" style={{textAlign: "left"}}>
                                <div className="card-header">
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.AddTypeBillet}>
                                        
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">libelle</label>
                                            <input type="text" name="libelle" defaultValue={libelle}
                                                   onChange={this.inputValueChange} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="Entrer type Billet"/>
                                        </div>
                                       
                                        
                                        <button type="submit" className="btn btn-primary">Ajouter Nouveau Type de Billet</button>
                                    </form>
                                </div>
                                <div className="card-footer text-muted">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
