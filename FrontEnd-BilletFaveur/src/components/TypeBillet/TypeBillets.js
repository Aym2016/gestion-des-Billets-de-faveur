/*import React, {Component} from 'react'
import {connect} from "react-redux";
import {getTypeBillets} from "../../actions/TypeBilletAction";
import TypeBillet from "./TypeBillet";
import Chambre from "../Chambre/Chambre";

class TypeBilletHomePage extends Component {
    state = {
        loading: true,
        TypeBillets: null
    }

    async componentWillMount() {
        const res = await this.props.getTypeBillets()
        this.setState({
            TypeBillets: this.props.TypeBillets[0].slice(0, 3),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.TypeBillets)
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
                            this.state.TypeBillets.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <TypeBillet key={c.id} TypeBillet={c}/>
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
        TypeBillets: state.TypeBillets.TypeBillets
    }
}
export default connect(mapStateToProps, {getTypeBillets})(TypeBilletHomePage)
*/




/*
import React, {Component} from 'react'
import {connect} from "react-redux";
import {getTypeBillets} from "../../actions/TypeBilletAction";
import TypeBillet from "./TypeBillet";
import Chambre from "../Chambre/Chambre";
//import PropTypes from 'prop-types';
class TypeBilletHomePage extends Component {
    state = {
        loading: true,
        TypeBillets: null,
        
    }

    async componentWillMount() {
        const res = await this.props.getTypeBillets()
        this.setState({
            TypeBillets: this.props.TypeBillets[0].slice(0, 4),
        }, () => {
            this.setState({loading: false})
            console.log(this.props.TypeBillets)
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
                            this.state.TypeBillets.map(c => (
                                <div className="col-md-6"
                                     data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                                    <TypeBillet key={c.id} TypeBillet={c}/>
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
        TypeBillets: state.TypeBillets.TypeBillets
    }
}
export default connect(mapStateToProps, {getTypeBillets})(TypeBilletHomePage)*/
/* 
  class="menu-back cbp-af-header"componentWillMount() {
    const res =  this.props.getTypeBillets()
    this.setState({
        TypeBillets: this.props.TypeBillets[0].slice(0, 3),
    }, () => {
        this.setState({loading: false})
        console.log(this.props.TypeBillets)
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
import TypeBilletAction from "../../actions/TypeBilletAction";
//import TypeBillet from "./TypeBillet";
export default class TypeBillets extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTypeBillets = this.retrieveTypeBillets.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTypeBillet = this.setActiveTypeBillet.bind(this);
    this.removeAllTypeBilletss = this.removeAllTypeBillets.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      //TypeBillets: [],
      //currentTypeBillet:TypeBillets,
      currentIndex: "",
      //currentTypeBillet:TypeBillets,
     // searchTitle: ""
      loading:true,


    };

    this.addTypeBillet = this.addTypeBillet.bind(this);
    this.editTypeBillet = this.editTypeBillet.bind(this);
    this.deleteTypeBillet = this.deleteTypeBillet.bind(this);
}

deleteTypeBillet(id){
    TypeBilletAction.deleteTypeBillet(id).then( res => {
        this.setState({TypeBillets: this.state.TypeBillets.filter(TypeBillet => TypeBillet.id !== id)});
    });
}
viewTypeBillet(id){
    this.props.history.push(`/TypeBillet/${id}`);
}
editTypeBillet(id){
    this.props.history.push(`/add-TypeBillet/${id}`);
}

componentDidMount(){
    TypeBilletAction.getTypeBillets().then((res) => {
        this.setState({ TypeBillets: res.data});
    });
}

addTypeBillet(){
    this.props.history.push('/add-TypeBillet/_add');
}

  componentDidMount() {
    console.log("src/components/TypeBillet/TypeBillets.js TypeBillets::componentDidMount()");
    this.retrieveTypeBillets();
  } 
  
  retrieveTypeBillets() {
    console.log("src/components/TypeBillet/TypeBillets.js TypeBillets::retrieveTypeBillets()");
    TypeBilletAction.getTypeBillets()
      .then(response => {
        this.setState({
          TypeBillets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    console.log("src/components/TypeBillet/TypeBillets.js TypeBillets::componentDidMount()");

    this.retrieveTypeBillets();
    this.setState({
      currentTypeBillet: null,
      currentIndex: ""
    });
  }

  setActiveTypeBillet(TypeBillet, index) {
    this.setState({
      currentTypeBillet: TypeBillet,
      currentIndex: index
    });
  }

  removeAllTypeBillets() {
    TypeBilletAction.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCode() {
   TypeBilletAction.findByCode(this.state.searchCode)
      .then(response => {
        this.setState({
          TypeBillets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


 /* render() {
    const {TypeBillets, currentTypeBillet, currentIndex } = this.state; 
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
                          <div className="hero-text">Les Types de Billets</div>
                      </div>
                  </div>
              </div>
          </div>
      </div><div>
              <h2 className="text-center">TypeBillets List</h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addTypeBillet}> Add TypeBillet</button>
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
                          {this.state.TypeBillets.map(
                              TypeBillet => <tr key={TypeBillet.id}>
                                  <td> {TypeBillet.code} </td>
                                  <td> {TypeBillet.libelle}</td>

                                  <td>
                                      <button onClick={() => this.editTypeBillet(TypeBillet.id)} className="btn btn-primary">Update </button>
                                      <button style={{ marginLeft: "10px" }} onClick={() => this.deleteTypeBillet(TypeBillet.id)} className="btn btn-primary">Delete </button>
                                     {/* <button style={{ marginLeft: "10px" }} onClick={() => this.viewTypeBillet(TypeBillet.id)} className="btn btn-primary">View </button>*/}
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
      TypeBillets: state.TypeBillets.TypeBillets
  }
}
