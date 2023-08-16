/*import React, {Component} from 'react'
import {connect} from "react-redux";
import {getMotifs} from "../../actions/MotifAction";
import Motif from "./Motif";
import Chambre from "../Chambre/Chambre";

class MotifHomePage extends Component {
    state = {
        loading: true,
        Motifs: null
    }

    async componentWillMount() {
        const res = await this.props.getMotifs()
        this.setState({
            Motifs: this.props.Motifs[0].slice(0, 3),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.Motifs)
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
                            this.state.Motifs.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <Motif key={c.id} Motif={c}/>
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
        Motifs: state.Motifs.Motifs
    }
}
export default connect(mapStateToProps, {getMotifs})(MotifHomePage)
*/




/*
import React, {Component} from 'react'
import {connect} from "react-redux";
import {getMotifs} from "../../actions/MotifAction";
import Motif from "./Motif";
import Chambre from "../Chambre/Chambre";
//import PropTypes from 'prop-types';
class MotifHomePage extends Component {
    state = {
        loading: true,
        Motifs: null,
        
    }

    async componentWillMount() {
        const res = await this.props.getMotifs()
        this.setState({
            Motifs: this.props.Motifs[0].slice(0, 4),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.Motifs)
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
                            this.state.Motifs.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <Motif key={c.id} Motif={c}/>
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
        Motifs: state.Motifs.Motifs
    }
}
export default connect(mapStateToProps, {getMotifs})(MotifHomePage)*/
/* 
  class="menu-back cbp-af-header"componentWillMount() {
    const res =  this.props.getMotifs()
    this.setState({
        Motifs: this.props.Motifs[0].slice(0, 3),
    }, () => {
        this.setState({loading: false})
        console.log(this.props.Motifs)
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
import MotifAction from "../../actions/MotifAction";
//import Motif from "./Motif";
export default class Motifs extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveMotifs = this.retrieveMotifs.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveMotif = this.setActiveMotif.bind(this);
    this.removeAllMotifss = this.removeAllMotifs.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      //Motifs: [],
      //currentMotif:Motifs,
      currentIndex: "",
      //currentMotif:Motifs,
     // searchTitle: ""
      loading:true,


    };

    this.addMotif = this.addMotif.bind(this);
    this.editMotif = this.editMotif.bind(this);
    this.deleteMotif = this.deleteMotif.bind(this);
}

deleteMotif(id){
    MotifAction.deleteMotif(id).then( res => {
        this.setState({Motifs: this.state.Motifs.filter(Motif => Motif.id !== id)});
    });
}
viewMotif(id){
    this.props.history.push(`/Motif/${id}`);
}
editMotif(id){
    this.props.history.push(`/add-Motif/${id}`);
}

componentDidMount(){
    MotifAction.getMotifs().then((res) => {
        this.setState({ Motifs: res.data});
    });
}

addMotif(){
    this.props.history.push('/add-Motif/_add');
}

  componentDidMount() {
    console.log("src/components/Motif/Motifs.js Motifs::componentDidMount()");
    this.retrieveMotifs();
  } 
  
  retrieveMotifs() {
    console.log("src/components/Motif/Motifs.js Motifs::retrieveMotifs()");
    MotifAction.getMotifs()
      .then(response => {
        this.setState({
          Motifs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    console.log("src/components/Motif/Motifs.js Motifs::componentDidMount()");

    this.retrieveMotifs();
    this.setState({
      currentMotif: null,
      currentIndex: ""
    });
  }

  setActiveMotif(Motif, index) {
    this.setState({
      currentMotif: Motif,
      currentIndex: index
    });
  }

  removeAllMotifs() {
    MotifAction.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCode() {
   MotifAction.findByCode(this.state.searchCode)
      .then(response => {
        this.setState({
          Motifs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


 /* render() {
    const {Motifs, currentMotif, currentIndex } = this.state; 
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
                          <div className="hero-text">Les Motifs</div>
                      </div>
                  </div>
              </div>
          </div>
      </div><div>
              <h2 className="text-center">Motifs List</h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addMotif}> Add Motif</button>
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
                          {this.state.Motifs.map(
                              Motif => <tr key={Motif.id}>
                                  <td> {Motif.code} </td>
                                  <td> {Motif.libelle}</td>

                                  <td>
                                      <button onClick={() => this.editMotif(Motif.id)} className="btn btn-primary">Update </button>
                                      <button style={{ marginLeft: "10px" }} onClick={() => this.deleteMotif(Motif.id)} className="btn btn-primary">Delete </button>
                                      <button style={{ marginLeft: "10px" }} onClick={() => this.viewMotif(Motif.id)} className="btn btn-primary">View </button>
                                  </td>
                              </tr>
                          )}
                      </tbody>
                  </table>

              </div>

          </div></>
)
                      }}
  /*const mapStateToProps = (state) => {
  return {
      Motifs: state.Motifs.Motifs
  }
}*/
