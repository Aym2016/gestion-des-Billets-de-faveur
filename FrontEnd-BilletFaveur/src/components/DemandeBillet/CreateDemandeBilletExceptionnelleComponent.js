import React, { Component } from 'react'
import DemandeBilletAction from '../../actions/DemandeBilletAction';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import DemandeBilletService from '../services/DemandeBilletService';
import Axios from 'axios';
const Personnel_API_BASE_URL = "http://localhost:8080/api/test/rest/personnels"; 
const Parcours_API_BASE_URL = "http://localhost:8080/api/test/rest/Parcours"; 
const TypeBillet_API_BASE_URL = "http://localhost:8080/api/test/rest/TypeBillets"; 
const Compagnie_API_BASE_URL = "http://localhost:8080/api/test/rest/compagnies"; 
export default class CreateDemandeBilletExceptionnelleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
           
            personnel: '',
            IdTypeBillet:'',
            IdParcours: '',
            IdCompagnie:'',
            dateAller:'',
            dateRetour:'',
            Personnels:[],
            typeBillets:[],
            Parcours:[],
            Compagnies:[],
            Nom:'',
            Prenom:'',
            Emploi:'',
            Statut:'',




            
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.saveOrUpdateDemandeBillet = this.saveOrUpdateDemandeBillet.bind(this);
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
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            DemandeBilletAction.getDemandeBilletById(this.state.idDemande).then( (res) =>{
                let DemandeBillet = res.data;
                this.setState({idDemande:DemandeBillet.idDemande,IdTypeBillet:DemandeBillet.
                    IdtypeBillet,personnel:DemandeBillet.personnel,
                    parcours:DemandeBillet.IdParcours,
                    compagnie:DemandeBillet.IdCompagnie,
                    dateAller:DemandeBillet.dateAller,
                    dateRetour:DemandeBillet.dateRetour
                });
            });
        }        
    }
    saveOrUpdateDemandeBillet = (e) => {
        e.preventDefault();
        let DemandeBillet = {idDemande:this.state.idDemande,personnel:this.state.personnel,
            typeBillet:this.state.
            IdTypeBillet,parcours:this.state.IdParcours,
            compagnie:this.state.IdCompagnie,
            dateAller:this.state.dateAller,
            dateRetour:this.state.dateRetour,
            Nom:  this.state.Nom
         ,Prenom:this.state.Prenom ,Emploi:this.state.Emploi, 
         Statut:this.state.Statut
        };
        console.log('DemandeBillet => ' + JSON.stringify(DemandeBillet));
        DemandeBilletAction.createDemandeBilletExceptionnelle(DemandeBillet).then(res =>{
            this.props.history.push('/DemandeBillets');});
        /*let Personnel={Matricule: this.state.personnel,Nom:  this.state.nom
         ,Prenom:this.state.prenom ,Emploi:this.state.emploi, 
         Statut:this.state.statut};

         console.log('Personnel => ' + JSON.stringify(Personnel));*/  
        // step 5
      /*  if(this.state.id === '_exp'){
           
            });
        }else{
            DemandeBilletAction.updateDemandeBillet(DemandeBillet, this.state.idDemande).then( res => {
                this.props.history.push('/DemandeBillets');
            });
        }*/
    }
    AddDemandeBillet = (event) => {
        // event.preventDefault()   
        console.log(this.state);

        Axios.post(URL + '/DemandeBillet/save', this.state)
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
        this.setState({IdTypeBillet:event.target.value});
    }
    changeCompagnieHandler= (event) => {
        this.setState({IdCompagnie:event.target.value});
    } 
    changeNomHandler= (event) => {
        this.setState({Nom:event.target.value});
    } 
    changePrenomHandler= (event) => {
        this.setState({Prenom:event.target.value});
    } 
    changeEmploiHandler= (event) => {
        this.setState({Emploi:event.target.value});
    } 
    changeStatutHandler= (event) => {
        this.setState({Statut:event.target.value});
    } 
    changeParcoursHandler= (event) => {
        this.setState({IdParcours:event.target.value});
    }
    inputValueChange = e => this.setState({[e.target.name]: e.target.value});

    cancel(){
        this.props.history.push('/DemandeBillets');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add DemandeBillet</h3>
        }else{
            //return <h3 className="text-center">Add DemandeBillet</h3>
            return <h3 className="text-center">Update DemandeBillet</h3>
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
                                <form onSubmit={this.saveOrUpdateDemandeBillet}>
                               {/* <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">Matricule</label>
                                            <input type="text" name="libelle" defaultValue={this.state.personnel}
                                                   onChange={this.changePersonnelHandler} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="Entrer matricule"/>
        </div>    */} 

                                      
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">Nom</label>
                                            <input type="text" name="libelle" defaultValue={this.state.Nom}
                                                   onChange={this.changeNomHandler} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="Entrer Nom employe"/>
                                        </div>     
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">Prenom</label>
                                            <input type="text" name="libelle" defaultValue={this.state.Prenom}
                                                   onChange={this.changePrenomHandler} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="Entrer Prenom employe"/>
                                        </div> 
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">Emploi</label>
                                            <input type="text" name="libelle" defaultValue={this.state.Emploi}
                                                   onChange={this.changeEmploiHandler} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="Entrer Prenom employe"/>
                                        </div>   
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">Statut</label>
                                            <input type="text" name="libelle" defaultValue={this.state.Statut}
                                                   onChange={this.changeStatutHandler} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="Entrer Prenom employe"/>
                                        </div>      
                                    
                               {/*     <div className="form-group "> 
                                        <label htmlFor="personnel">personnel :</label><br />
                                    <select onChange={this.changePersonnelHandler} value={this.state.personnel.matricule} required>  <option></option>       {   this.state.Personnels.map((option) => (
                                        
              <option value={option.matricule} >{option.matricule} </option>
                                    ))} </select> </div>*/}
           <div className="form-group "> 
           <label htmlFor="typeBillet">type Billet :</label><br />
       <select onChange={this.changeTypeBilletHandler} value={this.state.IdTypeBillet} required>  <option></option>       {   this.state.typeBillets.map((option) => (
           
<option value={option.id} >{option.id}   </option>
))} </select> </div>
                                    
                                    <div className="form-group "> 
                                        <label htmlFor="parcours">parcours :</label><br />
                                    <select onChange={this.changeParcoursHandler} value={this.state.IdParcours} required>  <option></option>       {   this.state.Parcours.map((option) => (
                                        
              <option value={option.id} >{option.id}   </option>
           ))} </select> </div>
                                
                                    <div className="form-group "> 
                                        <label htmlFor="compagnie">compagnie :</label><br />
                                    <select onChange={this.changeCompagnieHandler} value={this.state.IdCompagnie} required>  <option></option>       {   this.state.Compagnies.map((option) => (
                                        
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
                                   {/* <button className="btn btn-primary" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>*/}
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div></>
            
        )
    }
}