/*import React, {Component} from 'react'
import {connect} from "react-redux";
import {getCompagnies} from "../../actions/CompagnieAction";
import Compagnie from "./Compagnie";
import Chambre from "../Chambre/Chambre";

class CompagnieHomePage extends Component {
    state = {
        loading: true,
        compagnies: null
    }

    async componentWillMount() {
        const res = await this.props.getCompagnies()
        this.setState({
            compagnies: this.props.compagnies[0].slice(0, 3),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.compagnies)
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
                            this.state.compagnies.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <Compagnie key={c.id} compagnie={c}/>
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
        compagnies: state.compagnies.compagnies
    }
}
export default connect(mapStateToProps, {getCompagnies})(CompagnieHomePage)
*/




/*
import React, {Component} from 'react'
import {connect} from "react-redux";
import {getCompagnies} from "../../actions/CompagnieAction";
import Compagnie from "./Compagnie";
import Chambre from "../Chambre/Chambre";
//import PropTypes from 'prop-types';
class CompagnieHomePage extends Component {
    state = {
        loading: true,
        compagnies: null,
        
    }

    async componentWillMount() {
        const res = await this.props.getCompagnies()
        this.setState({
            compagnies: this.props.compagnies[0].slice(0, 4),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.compagnies)
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
                            this.state.compagnies.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <Compagnie key={c.id} compagnie={c}/>
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
        compagnies: state.compagnies.compagnies
    }
}
export default connect(mapStateToProps, {getCompagnies})(CompagnieHomePage)*/
/* 
  class="menu-back cbp-af-header"componentWillMount() {
    const res =  this.props.getCompagnies()
    this.setState({
        compagnies: this.props.compagnies[0].slice(0, 3),
    }, () => {
        this.setState({loading: false})
        console.log(this.props.compagnies)
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
import CompagnieAction from "../../actions/CompagnieAction";
import Compagnie from "./Compagnie";
export default class Compagnies extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveCompagnies = this.retrieveCompagnies.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCompagnie = this.setActiveCompagnie.bind(this);
    this.removeAllCompagniess = this.removeAllCompagnies.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      compagnies: [],
      currentCompagnie:Compagnie,
      currentIndex: "",
      currentCompagnie:Compagnie,
     // searchTitle: ""
      loading:true,


    };

    this.addCompagnie = this.addCompagnie.bind(this);
    this.editCompagnie = this.editCompagnie.bind(this);
    this.deleteCompagnie = this.deleteCompagnie.bind(this);
}

deleteCompagnie(id){
    CompagnieAction.deleteCompagnie(id).then( res => {
        this.setState({compagnies: this.state.compagnies.filter(compagnie => compagnie.id !== id)});
    });
}
viewCompagnie(id){
    this.props.history.push(`/compagnie/${id}`);
}
editCompagnie(id){
    this.props.history.push(`/add-compagnie/${id}`);
}

componentDidMount(){
    CompagnieAction.getCompagnies().then((res) => {
        this.setState({ Compagnies: res.data});
    });
}

addCompagnie(){
    this.props.history.push('/add-compagnie/_add');
}

  componentDidMount() {
    console.log("src/components/Compagnie/Compagnies.js Compagnies::componentDidMount()");
    this.retrieveCompagnies();
  } 
  
  retrieveCompagnies() {
    console.log("src/components/Compagnie/Compagnies.js Compagnies::retrieveCompagnies()");
    CompagnieAction.getCompagnies()
      .then(response => {
        this.setState({
          compagnies: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    console.log("src/components/Compagnie/Compagnies.js Compagnies::componentDidMount()");

    this.retrieveCompagnies();
    this.setState({
      currentCompagnie: null,
      currentIndex: ""
    });
  }

  setActiveCompagnie(compagnie, index) {
    this.setState({
      currentCompagnie: compagnie,
      currentIndex: index
    });
  }

  removeAllCompagnies() {
    CompagnieAction.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCode() {
   CompagnieAction.findByCode(this.state.searchCode)
      .then(response => {
        this.setState({
          compagnies: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    const {compagnies, currentCompagnie, currentIndex } = this.state; 
  }
  render() { 
  return (
    <><div className="section big-55-height over-hide z-bigger">
          <div className="parallax parallax-top" style={{ backgroundImage: 'url(img/1.jpg)' }}></div>
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
      </div><div>
              <h2 className="text-center">Compagnies List</h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addCompagnie}> Add Compagnie</button>
              </div>
              <br></br>
              <div className="row">
                  <table className="table table-striped table-bordered">

                      <thead>
                          <tr>

                              <th> code</th>
                              <th> libelle</th>
                              <th> Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.state.compagnies.map(
                              compagnie => <tr key={compagnie.id}>
                                  <td> {compagnie.code} </td>
                                  <td> {compagnie.libelle}</td>

                                  <td>
                                      <button onClick={() => this.editCompagnie(compagnie.id)} className="btn btn-primary">Update </button>
                                      <button style={{ marginLeft: "10px" }} onClick={() => this.deleteCompagnie(compagnie.id)} className="btn btn-primary">Delete </button>
                                      <button style={{ marginLeft: "10px" }} onClick={() => this.viewCompagnie(compagnie.id)} className="btn btn-primary">View </button>
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
      compagnies: state.compagnies.compagnies
  }
}
