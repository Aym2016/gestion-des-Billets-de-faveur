import React, {Component} from 'react'
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import MembreAction from "../../actions/MembreAction";
//import Membre from "./Membre";
export default class Membres extends Component {
 

  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveMembres = this.retrieveMembres.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveMembre = this.setActiveMembre.bind(this);
    this.removeAllMembress = this.removeAllMembres.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      Membres: [],
      currentMembre:Membres,
      currentIndex: "",
      currentMembre:Membres,
     // searchTitle: ""
      loading:true, 
      personnel:'',
      


    };

    this.addMembre = this.addMembre.bind(this);
    this.editMembre = this.editMembre.bind(this);
    this.deleteMembre = this.deleteMembre.bind(this);
}

deleteMembre(id){
    MembreAction.deleteMembre(id).then( res => {
        this.setState({Membres: this.state.Membres.filter(Membre => Membre.id !== id)});
    });
}
viewMembre(id){
    this.props.history.push(`/Membre/${id}`);
}
editMembre(id){
    this.props.history.push(`/add-Membre/${id}`);
}
changePersonnelHandler= (event) => {
    this.setState({personnel: event.target.value});
}

componentDidMount(){
    MembreAction.getMembres2().then((res) => {
        this.setState({ Membres: res.data});
    });
}

addMembre(){
    this.props.history.push('/add-Membre/_add');
}

  componentDidMount() {
    console.log("src/components/Membre/Membres.js Membres::componentDidMount()");
    this.retrieveMembres();
  } 
  
  retrieveMembres() {
    console.log("src/components/Membre/Membres.js Membres::retrieveMembres()");
    MembreAction.getMembres2(this.state.personnel)
      .then(response => {
        this.setState({
          Membres: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    console.log("src/components/Membre/Membres.js Membres::componentDidMount()");

    this.retrieveMembres();
    this.setState({
      currentMembre: null,
      currentIndex: ""
    });
  }

  setActiveMembre(Membre, index) {
    this.setState({
      currentMembre: Membre,
      currentIndex: index
    });
  }

  removeAllMembres() {
    MembreAction.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCode() {
   MembreAction.findByCode(this.state.searchCode)
      .then(response => {
        this.setState({
          Membres: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  /*render() {
    const { Membres, currentMembre, currentIndex } = this.state; 
  }*/
  render() { 
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
      </div><div> <form onChange={this.retrieveMembres()}>
      <div className="form-group">
                                        <label> code: </label>
                                        <input placeholder="personnel" name="personnel" className="form-control"
                                            value={this.state.personnel} onChange={this.changePersonnelHandler} />
                                    </div>
              <h2 className="text-center">Membres List</h2>
              
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addMembre}> Add Membre</button>
              </div>
              <br></br>
              </form>
              <div className="row">
                  <table className="table table-striped table-bordered">

                      <thead>
                          <tr>

                              
                              <th> type de Billet</th>
                              <th>personnel</th>
                              <th>parcours</th>
                              <th>compagnie</th> 
                              <th>dateAller</th>
                              <th>dateRetour      </th>
                              <th> Actions</th>
                          </tr>
                      </thead>
                    :  <tbody>
                          {this.state.Membres.map(
                              Membre => <tr key={Membre.id}>
                                  
                                  <td> {Membre.dtNaiss}</td>
                                 <td> {Membre.personnel.matricule}</td> 
                                 <td> {Membre.id}</td>
                                 <td> {Membre.parente}</td>
                                {/* <td> {Membre.dateAller}</td>
                                 <td> {Membre.dateRetour}</td>*/}
                                {/*  <td> {Membre.personnels &&
            Membre.personnel.map((personne, index) => <li key={index}>{personne.prenom}</li>)}</td>*/}
                                  
                                  <td>
                                      <button onClick={() => this.editMembre(Membre.idDemande)} className="btn btn-primary">Update </button>
                                      {/*<button style={{ marginLeft: "10px" }} onClick={() => this.deleteMembre(Membre.id)} className="btn btn-primary">Delete </button>*/}
                                      
                                  </td>
                              </tr>
                          )}
                      </tbody>
                  </table>

              </div>
          

          </div></> 
)
                      }}
  const mapStateToProps = (state) => {
  return {
      Membres: state.Membres.Membres
  }
}





/*import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Membres extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

Membres.propTypes = {};

export default Membres;*/