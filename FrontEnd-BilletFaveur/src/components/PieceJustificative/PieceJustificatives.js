
import React, {Component} from 'react'
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import PieceJustificativeAction from "../../actions/PieceJustificativeAction";
//import PieceJustificative from "./PieceJustificative";
export default class PieceJustificatives extends Component {
 

  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrievePieceJustificatives = this.retrievePieceJustificatives.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePieceJustificative = this.setActivePieceJustificative.bind(this);
    this.removeAllPieceJustificativess = this.removeAllPieceJustificatives.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      PieceJustificatives: [],
      currentPieceJustificative:PieceJustificatives,
      currentIndex: "",
      currentPieceJustificative:PieceJustificatives,
     // searchTitle: ""
      loading:true, 
      


    };

    this.addPieceJustificative = this.addPieceJustificative.bind(this);
    this.editPieceJustificative = this.editPieceJustificative.bind(this);
    this.deletePieceJustificative = this.deletePieceJustificative.bind(this);
}

deletePieceJustificative(id){
    PieceJustificativeAction.deletePieceJustificative(id).then( res => {
        this.setState({PieceJustificatives: this.state.PieceJustificatives.filter(PieceJustificative => PieceJustificative.id !== id)});
    });
}
viewPieceJustificative(id){
    this.props.history.push(`/PieceJustificative/${id}`);
}
editPieceJustificative(id){
    this.props.history.push(`/add-PieceJustificative/${id}`);
}

componentDidMount(){
    PieceJustificativeAction.getPieceJustificatives().then((res) => {
        this.setState({ PieceJustificatives: res.data});
    });
}

addPieceJustificative(){
    this.props.history.push('/add-PieceJustificative/_add');
}

  componentDidMount() {
    console.log("src/components/PieceJustificative/PieceJustificatives.js PieceJustificatives::componentDidMount()");
    this.retrievePieceJustificatives();
  } 
  
  retrievePieceJustificatives() {
    console.log("src/components/PieceJustificative/PieceJustificatives.js PieceJustificatives::retrievePieceJustificatives()");
    PieceJustificativeAction.getPieceJustificatives()
      .then(response => {
        this.setState({
          PieceJustificatives: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    console.log("src/components/PieceJustificative/PieceJustificatives.js PieceJustificatives::componentDidMount()");

    this.retrievePieceJustificatives();
    this.setState({
      currentPieceJustificative: null,
      currentIndex: ""
    });
  }

  setActivePieceJustificative(PieceJustificative, index) {
    this.setState({
      currentPieceJustificative: PieceJustificative,
      currentIndex: index
    });
  }

  removeAllPieceJustificatives() {
    PieceJustificativeAction.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCode() {
   PieceJustificativeAction.findByCode(this.state.searchCode)
      .then(response => {
        this.setState({
          PieceJustificatives: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


 /* render() {
    const { PieceJustificatives, currentPieceJustificative, currentIndex } = this.state; 
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
                          <div className="hero-text">les  pieces justificatives</div>
                      </div>
                  </div>
              </div>
          </div>
      </div><div>
              <h2 className="text-center">PieceJustificatives List</h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addPieceJustificative}> Add PieceJustificative</button>
              </div>
              <br></br>
              
              <div className="row">
                  <table className="table table-striped table-bordered">

                      <thead>
                          <tr>

                              <th> code</th>
                              <th> libelle</th>
                              <th>personnel</th>
                              <th> Actions</th>
                          </tr>
                      </thead>
                    :  <tbody>
                          {this.state.PieceJustificatives.map(
                              PieceJustificative => <tr key={PieceJustificative.id}>
                                  <td> {PieceJustificative.code} </td>
                                  <td> {PieceJustificative.libelle}</td>
                                 <td> {PieceJustificative.personnel.matricule}</td>
                                {/*  <td> {PieceJustificative.personnels &&
            PieceJustificative.personnel.map((personne, index) => <li key={index}>{personne.prenom}</li>)}</td>*/}
                                  
                                  <td>
                                      <button onClick={() => this.editPieceJustificative(PieceJustificative.id)} className="btn btn-primary">Update </button>
                                      {/*<button style={{ marginLeft: "10px" }} onClick={() => this.deletePieceJustificative(PieceJustificative.id)} className="btn btn-primary">Delete </button>*/}
                                      
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
      PieceJustificatives: state.PieceJustificatives.PieceJustificatives
  }
}
