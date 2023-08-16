import React, {Component} from 'react'
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import EmissionBilletAction from "../../actions/EmissionBilletAction";
//import EmissionBillet from "./EmissionBillet";
export default class EmissionBillets extends Component {
 

  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveEmissionBillets = this.retrieveEmissionBillets.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveEmissionBillet = this.setActiveEmissionBillet.bind(this);
    this.removeAllEmissionBilletss = this.removeAllEmissionBillets.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      EmissionBillets: [],
      currentEmissionBillet:EmissionBillets,
      currentIndex: "",
      currentEmissionBillet:EmissionBillets,
     // searchTitle: ""
      loading:true, 
      


    };

    this.addEmissionBillet = this.addEmissionBillet.bind(this);
    this.editEmissionBillet = this.editEmissionBillet.bind(this);
    this.deleteEmissionBillet = this.deleteEmissionBillet.bind(this);
}

deleteEmissionBillet(id){
    EmissionBilletAction.deleteEmissionBillet(id).then( res => {
        this.setState({EmissionBillets: this.state.EmissionBillets.filter(EmissionBillet => EmissionBillet.id !== id)});
    });
}
viewEmissionBillet(id){
    this.props.history.push(`/EmissionBillet/${id}`);
}
editEmissionBillet(id){
    this.props.history.push(`/add-EmissionBillet/${id}`);
}

componentDidMount(){
    EmissionBilletAction.getEmissionBillets().then((res) => {
        this.setState({ EmissionBillets: res.data});
    });
}

addEmissionBillet(){
    this.props.history.push('/add-EmissionBillet/_add');
}

  componentDidMount() {
    console.log("src/components/EmissionBillet/EmissionBillets.js EmissionBillets::componentDidMount()");
    this.retrieveEmissionBillets();
  } 
  
  retrieveEmissionBillets() {
    console.log("src/components/EmissionBillet/EmissionBillets.js EmissionBillets::retrieveEmissionBillets()");
    EmissionBilletAction.getEmissionBillets()
      .then(response => {
        this.setState({
          EmissionBillets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    console.log("src/components/EmissionBillet/EmissionBillets.js EmissionBillets::componentDidMount()");

    this.retrieveEmissionBillets();
    this.setState({
      currentEmissionBillet: null,
      currentIndex: ""
    });
  }

  setActiveEmissionBillet(EmissionBillet, index) {
    this.setState({
      currentEmissionBillet: EmissionBillet,
      currentIndex: index
    });
  }

  removeAllEmissionBillets() {
    EmissionBilletAction.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCode() {
   EmissionBilletAction.findByCode(this.state.searchCode)
      .then(response => {
        this.setState({
          EmissionBillets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


 /* render() {
    const { EmissionBillets, currentEmissionBillet, currentIndex } = this.state; 
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
                          <div className="hero-text">les  Emissions de Billets d'avions</div>
                      </div>
                  </div>
              </div>
          </div>
      </div><div>
              <h2 className="text-center">EmissionBillets List</h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addEmissionBillet}> Add EmissionBillet</button>
              </div>
              <br></br>
              
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
                              <th>Motif</th>
                              <th> Actions</th>
                          </tr>
                      </thead>
                    :  <tbody>
                          {this.state.EmissionBillets.map(
                              EmissionBillet => <tr key={EmissionBillet.idEmission}>
                                  
                                  <td> {EmissionBillet.typeBillet}</td>
                                 <td> {EmissionBillet.personnel.matricule}</td> 
                                 <td> {EmissionBillet.parcours}</td>
                                 <td> {EmissionBillet.compagnie}</td>
                                 <td> {EmissionBillet.dateAller}</td>
                                 <td> {EmissionBillet.dateRetour}</td>
                                 <td> {EmissionBillet.motif.id}</td>
                                {/*  <td> {EmissionBillet.personnels &&
            EmissionBillet.personnel.map((personne, index) => <li key={index}>{personne.prenom}</li>)}</td>*/}
                                  
                                  <td>
                                      <button onClick={() => this.editEmissionBillet(EmissionBillet.idEmission)} className="btn btn-primary">Update </button>
                                      {/*<button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmissionBillet(EmissionBillet.id)} className="btn btn-primary">Delete </button>*/}
                                      
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
      EmissionBillets: state.EmissionBillets.EmissionBillets
  }
}





/*import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EmissionBillets extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

EmissionBillets.propTypes = {};

export default EmissionBillets;*/