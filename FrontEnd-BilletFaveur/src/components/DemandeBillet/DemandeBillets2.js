import React, {Component} from 'react'
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import DemandeBilletAction from "../../actions/DemandeBilletAction";
//import DemandeBillet from "./DemandeBillet";
export default class DemandeBillets2 extends Component {
 

  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveDemandeBillets2 = this.retrieveDemandeBillets2.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDemandeBillet = this.setActiveDemandeBillet.bind(this);
    this.removeAllDemandeBillets2 = this.removeAllDemandeBillets2.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      DemandeBillets: [],
      currentDemandeBillet:DemandeBillets2,
      currentIndex: "",
      currentDemandeBillet:DemandeBillets2,
     // searchTitle: ""
      loading:true, 
      


    };

    this.addDemandeBillet = this.addDemandeBillet.bind(this);
    this.editDemandeBillet = this.editDemandeBillet.bind(this);
    this.deleteDemandeBillet = this.deleteDemandeBillet.bind(this);
}

deleteDemandeBillet(id){
    DemandeBilletAction.deleteDemandeBillet(id).then( res => {
        this.setState({DemandeBillets: this.state.DemandeBillets.filter(DemandeBillet => DemandeBillet.id !== id)});
    });
}
viewDemandeBillet(id){
    this.props.history.push(`/DemandeBillet/${id}`);
}
editDemandeBillet(id){
    this.props.history.push(`/add-DemandeBillet/${id}`);
}

componentDidMount(){
    DemandeBilletAction.getDemandeBillets2().then((res) => {
        this.setState({ DemandeBillets: res.data});
    });
}

addDemandeBillet(){
    this.props.history.push('/add-DemandeBillet/_add');
}

  componentDidMount() {
    console.log("src/components/DemandeBillet/DemandeBillets2.js DemandeBillets2::componentDidMount()");
    this.retrieveDemandeBillets2();
  } 
  
  retrieveDemandeBillets2() {
    console.log("src/components/DemandeBillet/DemandeBillets2.js DemandeBillets2::retrieveDemandeBillets2()");
    DemandeBilletAction.getDemandeBilletsDemandeBilletTunisairExpress()
      .then(response => {
        this.setState({
          DemandeBillets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    console.log("src/components/DemandeBillet/DemandeBillets2.js DemandeBillets2::componentDidMount()");

    this.retrieveDemandeBillets2();
    this.setState({
      currentDemandeBillet: null,
      currentIndex: ""
    });
  }

  setActiveDemandeBillet(DemandeBillet, index) {
    this.setState({
      currentDemandeBillet: DemandeBillet,
      currentIndex: index
    });
  }

  removeAllDemandeBillets2() {
    DemandeBilletAction.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCode() {
   DemandeBilletAction.findByCode(this.state.searchCode)
      .then(response => {
        this.setState({
          DemandeBillets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  /*render() {
    const { DemandeBillets2, currentDemandeBillet, currentIndex } = this.state; 
  }*/
  render() { 
  return (
    
    <><div className="section big-55-height over-hide z-bigger">
          <div className="parallax parallax-top" style={{ backgroundImage: 'url(img/2.jpg)' }}></div>
          <div className="dark-over-pages"></div>

          <div className="hero-center-section pages">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-22 parallax-fade-top">
                          <div className="hero-text">les  Demandes de Billets d'avions</div>
                      </div>
                  </div>
              </div>
          </div>
      </div><div>
              <h2 className="text-center">DemandeBillets2 List</h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addDemandeBillet}> Add DemandeBillet</button>
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
                              <th> Actions</th>
                          </tr>
                      </thead>
                    :  <tbody>
                          {this.state.DemandeBillets.map(
                              DemandeBillet => <tr key={DemandeBillet.idDemande}>
                                  
                                  <td> {DemandeBillet.typeBillet}</td>
                                 <td> {DemandeBillet.personnel.matricule}</td> 
                                 <td> {DemandeBillet.parcours.id}</td>
                                 <td> {DemandeBillet.compagnie}</td>
                                 <td> {DemandeBillet.dateAller}</td>
                                 <td> {DemandeBillet.dateRetour}</td>
                                {/*  <td> {DemandeBillet.personnels &&
            DemandeBillet.personnel.map((personne, index) => <li key={index}>{personne.prenom}</li>)}</td>*/}
                                  
                                  <td>
                                      <button onClick={() => this.editDemandeBillet(DemandeBillet.idDemande)} className="btn btn-primary">Update </button>
                                      {/*<button style={{ marginLeft: "20px" }} onClick={() => this.deleteDemandeBillet(DemandeBillet.id)} className="btn btn-primary">Delete </button>*/}
                                      
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
      DemandeBillets2: state.DemandeBillets2.DemandeBillets2
  }
}





/*import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DemandeBillets2 extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

DemandeBillets2.propTypes = {};

export default DemandeBillets2;*/