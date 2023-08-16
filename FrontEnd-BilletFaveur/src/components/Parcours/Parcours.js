/*import React, {Component} from 'react'
import {connect} from "react-redux";
import {getParcours} from "../../actions/ParcourAction";
import Parcour from "./Parcour";
import Chambre from "../Chambre/Chambre";

class ParcourHomePage extends Component {
    state = {
        loading: true,
        Parcours: null
    }

    async componentWillMount() {
        const res = await this.props.getParcours()
        this.setState({
            Parcours: this.props.Parcours[0].slice(0, 3),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.Parcours)
        })
    }

    render() {
        return (
            <div class="section padding-top-bottom z-bigger">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 align-self-center">
                            <div class="subtitle with-line text-center mb-4">main dishes</div>
                            <h3 class="text-center padding-bottom-small">Our menu</h3>
                        </div>
                        <div class="section clearfix"></div>
                        {this.state.loading == true ? <img  src="/img/loading.gif"/> :
                            this.state.Parcours.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <Parcour key={c.id} Parcour={c}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Parcours: state.Parcours.Parcours
    }
}
export default connect(mapStateToProps, {getParcours})(ParcourHomePage)
*/




/*
import React, {Component} from 'react'
import {connect} from "react-redux";
import {getParcours} from "../../actions/ParcourAction";
import Parcour from "./Parcour";
import Chambre from "../Chambre/Chambre";
//import PropTypes from 'prop-types';
class ParcourHomePage extends Component {
    state = {
        loading: true,
        Parcours: null,
        
    }

    async componentWillMount() {
        const res = await this.props.getParcours()
        this.setState({
            Parcours: this.props.Parcours[0].slice(0, 4),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.Parcours)
        })
    }

    render() {
        return (
          
           
           
           <div class="section padding-top-bottom z-bigger">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 align-self-center">
                            <div class="subtitle with-line text-center mb-4">main dishes</div>
                            <h3 class="text-center padding-bottom-small">Our menu</h3>
                        </div>
                        <div class="section clearfix"></div>
                        {this.state.loading == true ? <img  src="/img/loading.gif"/> :
                            this.state.Parcours.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <Parcour key={c.id} Parcour={c}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        Parcours: state.Parcours.Parcours
    }
}
export default connect(mapStateToProps, {getParcours})(ParcourHomePage)*/
/* 
  class="menu-back cbp-af-header"componentWillMount() {
    const res =  this.props.getParcours()
    this.setState({
        Parcours: this.props.Parcours[0].slice(0, 3),
    }, () => {
        this.setState({loading: false})
        console.log(this.props.Parcours)
    })
}*/

  /*onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }*/



import React, {Component} from 'react'
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import ParcoursAction from "../../actions/ParcoursAction";
///import Parcour from "./Parcour";
export default class Parcours extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveParcours = this.retrieveParcours.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveParcour = this.setActiveParcour.bind(this);
    this.removeAllParcours = this.removeAllParcours.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      //Parcours: [],
      //currentParcour:Parcours,
      currentIndex: "",
     // currentParcour:Parcours,
     // searchTitle: ""
      loading:true,


    };

    this.addParcour = this.addParcour.bind(this);
    this.editParcour = this.editParcour.bind(this);
    this.deleteParcour = this.deleteParcour.bind(this);
}

deleteParcour(id){
    ParcoursAction.deleteParcours(id).then( res => {
        this.setState({Parcours: this.state.Parcours.filter(Parcour => Parcour.id !== id)});
    });
}
viewParcour(id){
    this.props.history.push(`/Parcours/${id}`);
}
editParcour(id){
    this.props.history.push(`/add-Parcours/${id}`);
}

componentDidMount(){
    ParcoursAction.getParcours().then((res) => {
        this.setState({ Parcours: res.data});
    });
}

addParcour(){
    this.props.history.push('/add-Parcours/_add');
}

  componentDidMount() {
    console.log("src/components/Parcour/Parcours.js Parcours::componentDidMount()");
    this.retrieveParcours();
  } 
  
  retrieveParcours() {
    console.log("src/components/Parcour/Parcours.js Parcours::retrieveParcours()");
    ParcoursAction.getParcours()
      .then(response => {
        this.setState({
          Parcours: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    console.log("src/components/Parcour/Parcours.js Parcours::componentDidMount()");

    this.retrieveParcours();
    this.setState({
      currentParcour: null,
      currentIndex: ""
    });
  }

  setActiveParcour(Parcour, index) {
    this.setState({
      currentParcour: Parcour,
      currentIndex: index
    });
  }

  removeAllParcours() {
    ParcoursAction.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCode() {
   ParcoursAction.findByCode(this.state.searchCode)
      .then(response => {
        this.setState({
          Parcours: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  /*render() {
    const {Parcours, currentParcour, currentIndex } = this.state; 
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
                          <div className="hero-text">Les Parcours</div>
                      </div>
                  </div>
              </div>
          </div>
      </div><div>
              <h2 className="text-center">Parcours List</h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addParcour}> Ajouter Parcours</button>
              </div>
              <br></br>
              <div className="row">
                  <table className="table table-striped table-bordered">

                      <thead>
                          <tr>

                              <th> code</th>
                              <th> libelle</th>
                              <th> type</th>
                              <th> Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.state.Parcours.map(
                              Parcour => <tr key={Parcour.id}>
                                  <td> {Parcour.code} </td>
                                  <td> {Parcour.libelle}</td>

                                  <td>
                                      <button onClick={() => this.editParcour(Parcour.id)} className="btn btn-primary">Update </button>
                                      <button style={{ marginLeft: "10px" }} onClick={() => this.deleteParcour(Parcour.id)} className="btn btn-primary">Delete </button>
                                     
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
      Parcours: state.Parcours.Parcours
  }
}
