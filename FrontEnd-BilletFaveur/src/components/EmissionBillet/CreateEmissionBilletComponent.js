import React, { Component } from 'react'
import EmissionBilletAction from '../../actions/EmissionBilletAction';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import EmissionBilletService from '../services/EmissionBilletService';
import Axios from 'axios';
const Personnel_API_BASE_URL = "http://localhost:8080/api/test/rest/personnels"; 
const Parcours_API_BASE_URL = "http://localhost:8080/api/test/rest/Parcours"; 
const TypeBillet_API_BASE_URL = "http://localhost:8080/api/test/rest/TypeBillets"; 
const Compagnie_API_BASE_URL = "http://localhost:8080/api/test/rest/compagnies"; 
const Motif_API_BASE_URL = "http://localhost:8080/api/test/rest/motifs"; 
export default class CreateEmissionBilletComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
           
            personnel: '',
            typeBillet:'',
            parcours: '',
            compagnie:'',
            dateAller:'',
            dateRetour:'',
            motif:'',
            Personnels:[],
            typeBillets:[],
            Parcours:[],
            Compagnies:[],
            Motifs:[],




            
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.saveOrUpdateEmissionBillet = this.saveOrUpdateEmissionBillet.bind(this);
    }

    // step 3
    componentDidMount(){
        fetch(Personnel_API_BASE_URL)
        .then(response=>response.json())
        .then(data=>{
            this.setState({Personnels:data});
        });
        fetch(TypeBillet_API_BASE_URL)
        .then(response=>response.json())
        .then(data=>{
            this.setState({typeBillets:data});
        });
        fetch(Compagnie_API_BASE_URL)
        .then(response=>response.json())
        .then(data=>{
            this.setState({Compagnies:data});
        });
        fetch(Parcours_API_BASE_URL)
        .then(response=>response.json())
        .then(data=>{
            this.setState({Parcours:data});
        });
        fetch(Motif_API_BASE_URL)
        .then(response=>response.json())
        .then(data=>{
            this.setState({Motifs:data});
        });
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmissionBilletAction.getEmissionBilletById(this.state.idEmission).then( (res) =>{
                let EmissionBillet = res.data;
                this.setState({idEmission:EmissionBillet.idEmission,typeBillet:EmissionBillet.
                    typeBillet,personnel:EmissionBillet.personnel,
                    parcours:EmissionBillet.parcours,
                    compagnie:EmissionBillet.compagnie,
                    dateAller:EmissionBillet.dateAller,
                    dateRetour:EmissionBillet.dateRetour
                });
            });
        }        
    }
    saveOrUpdateEmissionBillet = (e) => {
        e.preventDefault();
        let EmissionBillet = {idEmission:this.state.idEmission,personnel:this.state.personnel,
            typeBillet:this.state.
            typeBillet,parcours:this.state.parcours,
            compagnie:this.state.compagnie,
            dateAller:this.state.dateAller,
            dateRetour:this.state.dateRetour,
            motif:this.state.motif};
        console.log('EmissionBillet => ' + JSON.stringify(EmissionBillet));

        // step 5
        if(this.state.id === '_add'){
            EmissionBilletAction.createEmissionBillet(EmissionBillet).then(res =>{
                this.props.history.push('/EmissionBillets');
            });
        }else{
            EmissionBilletAction.updateEmissionBillet(EmissionBillet, this.state.idEmission).then( res => {
                this.props.history.push('/EmissionBillets');
            });
        }
    }
    AddEmissionBillet = (event) => {
        // event.preventDefault()   
        console.log(this.state);

        Axios.post(URL + '/EmissionBillet/save', this.state)
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
    changePersonnelHandler= (event) => {
        this.setState({personnel:event.target.value});
    } 
    changeTypeBilletHandler= (event) => {
        this.setState({typeBillet:event.target.value});
    }
    changeCompagnieHandler= (event) => {
        this.setState({compagnie:event.target.value});
    } 
    changeParcoursHandler= (event) => {
        this.setState({parcours:event.target.value});
    }
    changeMotifHandler= (event) => {
        this.setState({motif:event.target.value});
    }
    inputValueChange = e => this.setState({[e.target.name]: e.target.value});

    cancel(){
        this.props.history.push('/EmissionBillets');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add EmissionBillet</h3>
        }else{
            //return <h3 className="text-center">Add EmissionBillet</h3>
            return <h3 className="text-center">Update EmissionBillet</h3>
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
                                <form onSubmit={this.saveOrUpdateEmissionBillet}>
                                    
                                    
                                    <div className="form-group "> 
                                        <label htmlFor="personnel">personnel :</label><br />
                                    <select onChange={this.changePersonnelHandler} value={this.state.personnel.matricule} required>  <option></option>       {   this.state.Personnels.map((option) => (
                                        
              <option value={option.matricule} >{option.matricule} </option>
           ))} </select> </div>
           <div className="form-group "> 
           <label htmlFor="typeBillet">type Billet :</label><br />
       <select onChange={this.changeTypeBilletHandler} value={this.state.typeBillet.id} required>  <option></option>       {   this.state.typeBillets.map((option) => (
           
<option value={option.id} >{option.id}   </option>
))} </select> </div>
                                    
                                    <div className="form-group "> 
                                        <label htmlFor="parcours">parcours :</label><br />
                                    <select onChange={this.changeParcoursHandler} value={this.state.parcours.id} required>  <option></option>       {   this.state.Parcours.map((option) => (
                                        
              <option value={option.id} >{option.id}   </option>
           ))} </select> </div>
                                
                                    <div className="form-group "> 
                                        <label htmlFor="compagnie">compagnie :</label><br />
                                    <select onChange={this.changeCompagnieHandler} value={this.state.compagnie.id} required>  <option></option>       {   this.state.Compagnies.map((option) => (
                                        
              <option value={option.id} > {option.id}   </option>
           ))} </select> </div> 

<div className="form-group "> 
                                        <label htmlFor="compagnie">motif :</label><br />
                                    <select onChange={this.changeMotifHandler} value={this.state.motif} required>  <option></option>       {   this.state.Motifs.map((option) => (
                                        
              <option value={option.id} > {option.id}   </option>
           ))} </select> </div>




                                    <div className="col-12 ">

 <DatePicker selected={this.state.dateAller}
            showPopperArrow={false}
            onChange={(e) => {
                this.setState({dateAller: e})
                console.log(e)
            }}/>

</div>   
<div className="col-12 ">

 <DatePicker selected={this.state.dateRetour}
            showPopperArrow={false}
            onChange={(e) => {
                this.setState({dateRetour: e})
                console.log(e)
            }}/>

</div>
                                    <button className="btn btn-primary"  type="submit">Save</button>
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

 //CreateEmissionBilletComponent;