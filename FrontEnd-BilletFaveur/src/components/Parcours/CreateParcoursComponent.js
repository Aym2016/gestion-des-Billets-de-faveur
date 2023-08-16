import React, { Component } from 'react'
import ParcoursAction from '../../actions/ParcoursAction';
//import ParcourService from '../services/ParcourService';
import Axios from 'axios';
export default class CreateParcourComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            code: '',
            libelle: '',
            type:''
            
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.saveOrUpdateParcours = this.saveOrUpdateParcours.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ParcoursAction.getParcoursById(this.state.id).then( (res) =>{
                let Parcour = res.data;
                this.setState({code: Parcour.code, libelle: Parcour.libelle,type:Parcour.type
                });
            });
        }        
    }
    saveOrUpdateParcours = (e) => {
        e.preventDefault();
        let Parcour = {code: this.state.code, libelle: this.state.libelle , type:this.state.type};
        console.log('Parcour => ' + JSON.stringify(Parcour));

        // step 5
        if(this.state.id === '_add'){
            ParcoursAction.createParcours(Parcour).then(res =>{
                this.props.history.push('/Parcours');
            });
        }else{
            ParcoursAction.updateParcours(Parcour, this.state.id).then( res => {
                this.props.history.push('/Parcours');
            });
        }
    }
    AddParcour = (event) => {
        // event.preventDefault()   
        console.log(this.state);

        Axios.post(URL + '/Parcour/save', this.state)
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
    changeTypeHandler= (event) => {
        this.setState({type: event.target.value});
    }
    inputValueChange = e => this.setState({[e.target.name]: e.target.value});

    cancel(){
        this.props.history.push('/Parcours');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Parcours</h3>
        }else{
            return <h3 className="text-center">Update Parcours</h3>
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
                            <form onSubmit={this.saveOrUpdateParcours}>
                                    <div className="form-group">
                                        <label> code: </label>
                                        <input placeholder="Code" name="code" className="form-control"
                                          required  value={this.state.code} onChange={this.changeCodeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Libelle: </label>
                                        <input placeholder="Libelle" name="libelle" className="form-control"
                                          required  value={this.state.libelle} onChange={this.changeLibelleHandler} />
                                    </div> 
                                    <div className="form-group">
                                        <label> type: </label>
                                        <input placeholder="Type" name="type" className="form-control"
                                          required  value={this.state.type} onChange={this.changeTypeHandler} />
                                    </div>

                                    <button className="btn btn-primary" type="submit">Save</button>
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

 //CreateParcourComponent;