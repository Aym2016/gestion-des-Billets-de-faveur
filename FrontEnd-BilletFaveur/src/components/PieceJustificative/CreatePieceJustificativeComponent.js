import React, { Component,Select } from 'react'
import {Form,Button} from 'react-bootstrap'
import PieceJustificativeAction from '../../actions/PieceJustificativeAction';
import PersonnelAction from '../../actions/PersonnelAction';
//import PieceJustificativeService from '../services/PieceJustificativeService';

import  { useEffect, useState } from 'react'
import Axios from 'axios';
import { matchPath } from 'react-router-dom';
const Personnel_API_BASE_URL = "http://localhost:8080/api/test/rest/personnels"; 
const PieceJustificative_API_BASE_URL = "http://localhost:8080/api/test/rest/PieceJustificatives";

 export default class CreatePieceJustificativeComponent extends Component {
    //const [personnels] = useState([]);
    
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            code: '',
            libelle: '',
            personnel:[],
            Personnels:[],
            person:0,
            selectedOption:''
        }
        
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.saveOrUpdatePieceJustificative = this.saveOrUpdatePieceJustificative.bind(this);
        this.handleChangeA=this.handleChangeA(this);
    }
    
     
       
    handleChangeA = selectedOption => {
        this.setState({selectedOption: selectedOption.value});
        console.log(`Option selected:`, selectedOption);
    };

    // step 3
    componentDidMount(){
        fetch(Personnel_API_BASE_URL)
        .then(response=>response.json())
        .then(data=>{
            this.setState({Personnels:data});
        });
        // step 4
        if(this.state.id === '_add'){
           
           
         return
        }else{
            PieceJustificativeAction.getPieceJustificativeById(this.state.id).then( (res) =>{
                let PieceJustificative = res.data;
                this.setState({code: PieceJustificative.code, libelle: PieceJustificative.libelle,
                    personnel: PieceJustificative.personnel 
                });
            });
        }        
    }
      
     remplirComboPersonnels = () => {
        
        return this.state.Personnels.map((item, index) => {
            return (
                <option value={item.id} key={index}>{item.emploi + " " + item.prenom}</option>
            )
        })
    
    
    }

         remplirComboPersonnel = () => {
           
            return this.state.Personnels.map((item, index) => {
                return (
                    <option value={item.matricule} key={index}>{item.emploi + " " + item.prenom}</option>
                )
            }) } 

        
            handleListChange = (e) => {
                this.state.personnel = this.state.Personnels.map(item => item.matricule) //indexOf(e.target.personnel.value);
                //console.log(index);
              }
              handleChangeP = Personnels => {
                this.setState({Personnels: this.state.personnel.matricule});
                console.log(`Option selected:`, Personnels);
            };
    saveOrUpdatePieceJustificative = (e) => {
        e.preventDefault();
        //const [personnel, setPersonnel] = useState("");
        //e.handleListChange();
        
        let PieceJustificative = {code: this.state.code, libelle: this.state.libelle , personnel: this.state.personnel
         
        };
        console.log('PieceJustificative => ' + JSON.stringify(PieceJustificative));
      
        const remplirComboPersonnels = () => {
           
            return this.state.Personnels.map((item, index) => {
                return (
                    <option value={item.id} key={index}>{item.emploi + " " + item.prenom}</option>
                )
            })
        }
        
        // step 5
        if(this.state.id === '_add'){
           //this.state.personnel=this.state.Personnels.map
          
           PieceJustificativeAction.createPieceJustificative(PieceJustificative).then(res =>{
                this.props.history.push('/PieceJustificatives');
            });
        }else{
            PieceJustificativeAction.updatePieceJustificative(PieceJustificative, this.state.id).then( res => {
                this.props.history.push('/PieceJustificatives');
            });
        }
    } 
     
   

    
    AddPieceJustificative = (event) => {
        // event.preventDefault()   
        console.log(this.state);

        Axios.post(URL + '/PieceJustificative/save', this.state)
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
    inputValueChange = e => this.setState({[e.target.name]: e.target.value});

    cancel(){
        this.props.history.push('/PieceJustificatives');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add PieceJustificative</h3>
        }else{
            return <h3 className="text-center">Update PieceJustificative</h3>
        }
    }
   
    render() {        
       
        
         
       const Option = this.state.Personnels.map(personnel=>
        <option   value={personnel.matricule}  >{personnel.matricule}</option>
      );
      //const {selectedOption} = this.state.selectedOption;
      /*this.state.personnel.matricule =this.state.Personnels.map(cat => ({
        label: cat.libelle,
        value: cat.id
    }))  */
     
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
                                <form onSubmit={this.saveOrUpdatePieceJustificative}>
                                                              
                                    <div className="form-group">
                                        <label> code: </label>
                                        <input placeholder="Code" name="code" className="form-control"
                                       required     value={this.state.code} onChange={this.changeCodeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Libelle: </label>
                                        <input placeholder="Libelle" name="libelle" className="form-control"
                                        required    value={this.state.libelle} onChange={this.changeLibelleHandler} />
        </div> 
                                                 
        <div className="form-group "> 
                                        <label htmlFor="personnel">personnel :</label><br />
                                    <select onChange={this.changePersonnelHandler} value={this.state.personnel.matricule} required>  <option></option>       {   this.state.Personnels.map((option) => (
                                        
              <option value={option.matricule} >{option.matricule} {option.prenom}</option>
           ))} </select>
            
                        
        {/*<Select
        value={this.state.selectedOption}
                            onChange={this.handleChangeA}
        options={this.state.personnel}/>*/}
         
        
    
     
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
/*const mapStateToProps = (state) => {
    return {
        Personnels: state.Personnels.Personnels,
    }*/

 //CreatePieceJustificativeComponent;

