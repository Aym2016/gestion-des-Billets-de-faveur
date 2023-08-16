/*import React, {Component} from 'react'
import {connect} from "react-redux";
import {getTypeDecisions} from "../../actions/TypeDecisionAction";
import TypeDecision from "./TypeDecision";
import Chambre from "../Chambre/Chambre";

class TypeDecisionHomePage extends Component {
    state = {
        loading: true,
        TypeDecisions: null
    }

    async componentWillMount() {
        const res = await this.props.getTypeDecisions()
        this.setState({
            TypeDecisions: this.props.TypeDecisions[0].slice(0, 3),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.TypeDecisions)
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
                            this.state.TypeDecisions.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <TypeDecision key={c.id} TypeDecision={c}/>
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
        TypeDecisions: state.TypeDecisions.TypeDecisions
    }
}
export default connect(mapStateToProps, {getTypeDecisions})(TypeDecisionHomePage)
*/




/*
import React, {Component} from 'react'
import {connect} from "react-redux";
import {getTypeDecisions} from "../../actions/TypeDecisionAction";
import TypeDecision from "./TypeDecision";
import Chambre from "../Chambre/Chambre";
//import PropTypes from 'prop-types';
class TypeDecisionHomePage extends Component {
    state = {
        loading: true,
        TypeDecisions: null,
        
    }

    async componentWillMount() {
        const res = await this.props.getTypeDecisions()
        this.setState({
            TypeDecisions: this.props.TypeDecisions[0].slice(0, 4),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.TypeDecisions)
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
                            this.state.TypeDecisions.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <TypeDecision key={c.id} TypeDecision={c}/>
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
        TypeDecisions: state.TypeDecisions.TypeDecisions
    }
}
export default connect(mapStateToProps, {getTypeDecisions})(TypeDecisionHomePage)*/
/* 
  class="menu-back cbp-af-header"componentWillMount() {
    const res =  this.props.getTypeDecisions()
    this.setState({
        TypeDecisions: this.props.TypeDecisions[0].slice(0, 3),
    }, () => {
        this.setState({loading: false})
        console.log(this.props.TypeDecisions)
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
import TypeDecisionAction from "../../actions/TypeDecisionAction";
//import TypeDecision from "./TypeDecision";
export default class TypeDecisions extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTypeDecisions = this.retrieveTypeDecisions.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTypeDecision = this.setActiveTypeDecision.bind(this);
    this.removeAllTypeDecisionss = this.removeAllTypeDecisions.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      TypeDecisions: [],
      currentTypeDecision:TypeDecisions,
      currentIndex: "",
      currentTypeDecision:TypeDecisions,
     // searchTitle: ""
      loading:true,


    };

    this.addTypeDecision = this.addTypeDecision.bind(this);
    this.editTypeDecision = this.editTypeDecision.bind(this);
    this.deleteTypeDecision = this.deleteTypeDecision.bind(this);
}

deleteTypeDecision(id){
    TypeDecisionAction.deleteTypeDecision(id).then( res => {
        this.setState({TypeDecisions: this.state.TypeDecisions.filter(TypeDecision => TypeDecision.id !== id)});
    });
}
viewTypeDecision(id){
    this.props.history.push(`/TypeDecision/${id}`);
}
editTypeDecision(id){
    this.props.history.push(`/add-TypeDecision/${id}`);
}

componentDidMount(){
    TypeDecisionAction.getTypeDecisions().then((res) => {
        this.setState({ TypeDecisions: res.data});
    });
}

addTypeDecision(){
    this.props.history.push('/add-TypeDecision/_add');
}

  componentDidMount() {
    console.log("src/components/TypeDecision/TypeDecisions.js TypeDecisions::componentDidMount()");
    this.retrieveTypeDecisions();
  } 
  
  retrieveTypeDecisions() {
    console.log("src/components/TypeDecision/TypeDecisions.js TypeDecisions::retrieveTypeDecisions()");
    TypeDecisionAction.getTypeDecisions()
      .then(response => {
        this.setState({
          TypeDecisions: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    console.log("src/components/TypeDecision/TypeDecisions.js TypeDecisions::componentDidMount()");

    this.retrieveTypeDecisions();
    this.setState({
      currentTypeDecision: null,
      currentIndex: ""
    });
  }

  setActiveTypeDecision(TypeDecision, index) {
    this.setState({
      currentTypeDecision: TypeDecision,
      currentIndex: index
    });
  }

  removeAllTypeDecisions() {
    TypeDecisionAction.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCode() {
   TypeDecisionAction.findByCode(this.state.searchCode)
      .then(response => {
        this.setState({
          TypeDecisions: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    const {TypeDecisions, currentTypeDecision, currentIndex } = this.state; 
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
                          <div className="hero-text">les  types de Decisions</div>
                      </div>
                  </div>
              </div>
          </div>
      </div><div>
              <h2 className="text-center">TypeDecisions List</h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addTypeDecision}> Add TypeDecision</button>
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
                          {this.state.TypeDecisions.map(
                              TypeDecision => <tr key={TypeDecision.id}>
                                  <td> {TypeDecision.code} </td>
                                  <td> {TypeDecision.libelle}</td>

                                  <td>
                                      <button onClick={() => this.editTypeDecision(TypeDecision.id)} className="btn btn-primary">Update </button>
                                      <button style={{ marginLeft: "10px" }} onClick={() => this.deleteTypeDecision(TypeDecision.id)} className="btn btn-primary">Delete </button>
                                      <button style={{ marginLeft: "10px" }} onClick={() => this.viewTypeDecision(TypeDecision.id)} className="btn btn-primary">View </button>
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
      TypeDecisions: state.TypeDecisions.TypeDecisions
  }
}
