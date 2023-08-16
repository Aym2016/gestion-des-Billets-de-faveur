/*import React, {Component} from 'react'
//import './Auth.css'
import Axios from 'axios'
import {URL} from '../../keys'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
/*
*
<div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail1">Code</label>
                                            <input type="text" name="code" defaultValue={code}
                                                   onChange={this.inputValueChange} className="form-control" required
                                                   id="exampleInputEmail1" aria-describedby="emailHelp"
                                                   placeholder="Enter nouveau compagnie"/>
                                        </div>*/
// import 'font-awesome/css/font-awesome.min.css'
/*export default class AddCompagnie extends Component {

    constructor() {
        super()
        this.state = {
            code: null,
            libelle: '',
            
        }
    }

    

    inputValueChange = e => this.setState({[e.target.name]: e.target.value});
    AddCompagnie = (event) => {
        // event.preventDefault()   
        console.log(this.state);

        Axios.post(URL + '/compagnie/save', this.state)
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
                                    <div className="hero-text">ajouter Compagnie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               {/* <div className="container pad">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card" style={{textAlign: "left"}}>
                                <div className="card-header">
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.AddCompagnie}>
                                        
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">libelle</label>
                                            <input type="text" name="libelle" defaultValue={libelle}
                                                   onChange={this.inputValueChange} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="Entrer libelle compagnie"/>
                                        </div>
                                       
                                        
                                        <button type="submit" className="btn btn-primary">Ajouter Nouveau Compagnie</button>
                                    </form>
                                </div>
                                <div className="card-footer text-muted">
                                </div>
                            </div>
                        </div>
                    </div>
        </div>*//*}
            </div>
        )
    }
}*/
import React, { Component } from 'react'
import CompagnieAction from '../../actions/CompagnieAction';
//import CompagnieService from '../services/CompagnieService';
import Axios from 'axios';
export default class AddCompagnie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            code: '',
            libelle: ''
            
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.saveOrUpdateCompagnie = this.saveOrUpdateCompagnie.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            CompagnieAction.getCompagnieById(this.state.id).then( (res) =>{
                let Compagnie = res.data;
                this.setState({code: Compagnie.code, libelle: Compagnie.libelle
                });
            });
        }        
    }
    saveOrUpdateCompagnie = (e) => {
        e.preventDefault();
        let Compagnie = {code: this.state.code, libelle: this.state.libelle};
        console.log('Compagnie => ' + JSON.stringify(Compagnie));

        // step 5
        if(this.state.id === '_add'){
            CompagnieAction.createCompagnie(Compagnie).then(res =>{
                this.props.history.push('/Compagnies');
            });
        }else{
            CompagnieAction.updateCompagnie(Compagnie, this.state.id).then( res => {
                this.props.history.push('/Compagnies');
            });
        }
    }
    AddCompagnie = (event) => {
        // event.preventDefault()   
        console.log(this.state);

        Axios.post(URL + '/compagnie/save', this.state)
            .then(response => {
                console.log(response.data);
                window.location.reload(false);
                //this.props.history.push('/signin')
            })
            .catch(error => console.log(error))
    }
    
    changeCodeHandler= (event) => {
        this.setState({code: event.target.value});
    }

    changeLibelleHandler= (event) => {
        this.setState({libelle: event.target.value});
    }
    inputValueChange = e => this.setState({[e.target.name]: e.target.value});

    cancel(){
        this.props.history.push('/Compagnies');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Compagnie</h3>
        }else{
            return <h3 className="text-center">Update Compagnie</h3>
        }
    }
    render() {        
        return (
           
           <><div>
                <div className="section big-55-height over-hide z-bigger">
                    <div className="parallax parallax-top" style={{ backgroundImage: 'url(img/1.jpg)' }}></div>
                    <div className="dark-over-pages"></div>

                    <div className="hero-center-section pages">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 parallax-fade-top">
                                    <div className="hero-text"> {this.getTitle()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pad">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                           
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> code: </label>
                                        <input placeholder="Code" name="code" className="form-control"
                                            value={this.state.code} onChange={this.changeCodeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Libelle: </label>
                                        <input placeholder="Libelle" name="libelle" className="form-control"
                                            value={this.state.libelle} onChange={this.changeLibelleHandler} />
                                    </div>

                                    <button className="btn btn-primary" onClick={this.saveOrUpdateCompagnie}>Save</button>
                                    <button className="btn btn-primary" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div></>
            
        )
    }
}

 //CreateCompagnieComponent;