/*import React, {Component} from 'react'
import {connect} from "react-redux";
import {getPayss} from "../../actions/PaysAction";
import Pays from "./Pays";
import Chambre from "../Chambre/Chambre";

class PaysHomePage extends Component {
    state = {
        loading: true,
        Payss: null
    }

    async componentWillMount() {
        const res = await this.props.getPayss()
        this.setState({
            Payss: this.props.Payss[0].slice(0, 3),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.Payss)
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
                            this.state.Payss.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <Pays key={c.id} Pays={c}/>
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
        Payss: state.Payss.Payss
    }
}
export default connect(mapStateToProps, {getPayss})(PaysHomePage)
*/




/*
import React, {Component} from 'react'
import {connect} from "react-redux";
import {getPayss} from "../../actions/PaysAction";
import Pays from "./Pays";
import Chambre from "../Chambre/Chambre";
//import PropTypes from 'prop-types';
class PaysHomePage extends Component {
    state = {
        loading: true,
        Payss: null,
        
    }

    async componentWillMount() {
        const res = await this.props.getPayss()
        this.setState({
            Payss: this.props.Payss[0].slice(0, 4),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.Payss)
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
                            this.state.Payss.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <Pays key={c.id} Pays={c}/>
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
        Payss: state.Payss.Payss
    }
}
export default connect(mapStateToProps, {getPayss})(PaysHomePage)*/
/* 
  class="menu-back cbp-af-header"componentWillMount() {
    const res =  this.props.getPayss()
    this.setState({
        Payss: this.props.Payss[0].slice(0, 3),
    }, () => {
        this.setState({loading: false})
        console.log(this.props.Payss)
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
import PaysAction from "../../actions/PaysAction";
//import Pays from "./Pays";
export default class Pays extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrievePays = this.retrievePays.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePays = this.setActivePays.bind(this);
    this.removeAllPays = this.removeAllPays.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      Payss: [],
      currentPays:Pays,
      currentIndex: "",
      currentPays:Pays,
     // searchTitle: ""
      loading:true,


    };

    this.addPays = this.addPays.bind(this);
    this.editPays = this.editPays.bind(this);
    this.deletePays = this.deletePays.bind(this);
}

deletePays(id){
    PaysAction.deletePays(id).then( res => {
        this.setState({Pays: this.state.Pays.filter(Pays => Pays.id !== id)});
    });
}
viewPays(id){
    this.props.history.push(`/Pays/${id}`);
}
editPays(id){
    this.props.history.push(`/add-Pays/${id}`);
}

componentDidMount(){
    PaysAction.getPays().then((res) => {
        this.setState({ Payss: res.data});
    });
}

addPays(){
    this.props.history.push('/add-Pays/_add');
}

  componentDidMount() {
    console.log("src/components/Pays/Pays.js Pays::componentDidMount()");
    this.retrievePays();
  } 
  
  retrievePays() {
    console.log("src/components/Pays/Payss.js Pays::retrievePays()");
    PaysAction.getPays()
      .then(response => {
        this.setState({
          Payss: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    console.log("src/components/Pays/Pays.js Payss::componentDidMount()");

    this.retrievePays();
    this.setState({
      currentPays: null,
      currentIndex: ""
    });
  }

  setActivePays(Pays, index) {
    this.setState({
      currentPays: Pays,
      currentIndex: index
    });
  }

  removeAllPays() {
    PaysAction.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCode() {
   PaysAction.findByCode(this.state.searchCode)
      .then(response => {
        this.setState({
          Payss: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    const {Pays, currentPays, currentIndex } = this.state; 
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
                          <div className="hero-text">Les Pays</div>
                      </div>
                  </div>
              </div>
          </div>
      </div><div>
              <h2 className="text-center">Pays List</h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addPays}> Add Pays</button>
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
                          {this.state.Payss.map(
                              Pays => <tr key={Pays.id}>
                                  <td> {Pays.code} </td>
                                  <td> {Pays.libelle}</td>

                                  <td>
                                      <button onClick={() => this.editPays(Pays.id)} className="btn btn-primary">Update </button>
                                      <button style={{ marginLeft: "10px" }} onClick={() => this.deletePays(Pays.id)} className="btn btn-primary">Delete </button>
                                      <button style={{ marginLeft: "10px" }} onClick={() => this.viewPays(Pays.id)} className="btn btn-primary">View </button>
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
      Payss: state.Payss.Payss
  }
}
