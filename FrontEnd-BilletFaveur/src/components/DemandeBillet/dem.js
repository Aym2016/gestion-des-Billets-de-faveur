 {/* <div className="form-group">
                                        <label> Libelle: </label>
                                        <input placeholder="Personnel" name="personnel" className="form-control"
                                          required  value={this.state.personnel} onChange={this.changePersonnelHandler} />
  </div>             
                                   
                                   <div className="form-group "> 
                                        <label htmlFor="personnel">personnel :</label><br />
                                    <select onChange={this.changePersonnelHandler} value={this.state.personnel.matricule} required>  <option></option>       {   this.state.Personnels.map((option) => (
                                        
              <option value={option.matricule} >{option.matricule} </option>
           ))} </select> </div>
           <div className="form-group "> 
           <label htmlFor="typeBillet">type Billet :</label><br />
       <select onChange={this.changeTypeBilletHandler} value={this.state.typeBillet.id} required>  <option></option>       {   this.state.typeBillets.map((option) => (
           
<option value={option.id} >{option.id}   </option>
))} </select> </div>
                                    
                                    <div className="form-group "> 
                                        <label htmlFor="parcours">parcours :</label><br />
                                    <select onChange={this.changeParcoursHandler} value={this.state.parcours.id} required>  <option></option>       {   this.state.Parcours.map((option) => (
                                        
              <option value={option.id} >{option.id}   </option>
           ))} </select> </div>
                                
                                    <div className="form-group "> 
                                        <label htmlFor="compagnie">compagnie :</label><br />
                                    <select onChange={this.changeCompagnieHandler} value={this.state.compagnie.id} required>  <option></option>       {   this.state.Compagnies.map((option) => (
                                        
              <option value={option.id} > {option.id}   </option>
           ))} </select> </div>




                                    <div className="col-12 ">

 <DatePicker selected={this.state.dateAller}
            showPopperArrow={false}
            onChange={(e) => {
                this.setState({dateAller: e})
                console.log(e)
            }}/>

</div>   
<div className="col-12 ">

 <DatePicker selected={this.state.dateRetour}
            showPopperArrow={false}
            onChange={(e) => {
                this.setState({dateRetour: e})
                console.log(e)
            }}/>

          </div>*/
                                                        
                
              {/*    <button className="btn btn-primary"  type="submit"  > chercher demande </button>*/}
              
              
             /* </div>
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
                          {this.state.DemandeBillets.map(
                              DemandeBillet => <tr key={DemandeBillet.idDemande}>
                                  
                                  <td> {DemandeBillet.typeBillet}</td>
                                 <td> {DemandeBillet.personnel.matricule}</td> 
                                 <td> {DemandeBillet.parcours.id}</td>
                                 <td> {DemandeBillet.compagnie}</td>
                                 <td> {DemandeBillet.dateAller}</td>
                                 <td> {DemandeBillet.dateRetour}</td>
                                {/*  <td> {DemandeBillet.personnels &&
            DemandeBillet.personnel.map((personne, index) => <li key={index}>{personne.prenom}</li>)}</td>*/
                                  
                                /*  <td>
                                      <button onClick={() => this.editDemandeBillet(DemandeBillet.idDemande)} className="btn btn-primary">Update </button>
                                      {/*<button style={{ marginLeft: "30px" }} onClick={() => this.deleteDemandeBillet(DemandeBillet.id)} className="btn btn-primary">Delete </button>*/
                                      
                             /*     </td>
                              </tr>
                          )}
                      </tbody>
                  </table>

              </div>
          

          </div>*/


/*import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DemandeBillets3 extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

DemandeBillets3.propTypes = {};

export default DemandeBillets3;*/





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


/*import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import API from '../../utils/API';
//import PostContainer from '../../components/PostContainer';
import { withRouter } from 'react-router';
import axios from 'axios';
import './index.css';
//import React, {Component} from 'react'
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import DemandeBilletAction from "../../actions/DemandeBilletAction";
class Posts extends Component {
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      carMake: '',
      carModel: '',
      carYear: '',
      category: 'Select A Category...',
      id: this.props.match.params.id,
           
            personnel: '',
            typeBillet:'',
            parcours: '',
            compagnie:'',
            dateAller:'',
            dateRetour:'',
            Personnels:[],
            typeBillets:[],
            Parcours:[],
            Compagnies:[],
    };
    this.signal = axios.CancelToken.source();
  }

  componentDidMount() {
    API.getAllPosts({
      cancelToken: this.signal.token
    })
      .then(resp => {
        this.setState({
          posts: resp.data
        });
      })
      .catch(function(error) {
        if (axios.isCancel(error)) {
          console.log('Error: ', error.message);
        } else {
          console.log(error);
        }
      });
  }
   
  componentWillUnmount() {
    this.signal.cancel('Api is being canceled');
  }
  changeCodeHandler= (event) => {
    this.setState({code: event.target.value});
}

changeLibelleHandler= (event) => {
    this.setState({libelle: event.target.value});
} 
changePersonnelHandler= (event) => {
    this.setState({personnel:event.target.value});
} 
changeTypeBilletHandler= (event) => {
    this.setState({typeBillet:event.target.value});
}
changeCompagnieHandler= (event) => {
    this.setState({compagnie:event.target.value});
} 
changeParcoursHandler= (event) => {
    this.setState({parcours:event.target.value});
} 

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  retrieveDemandeBillets3() {
    console.log("src/components/DemandeBillet/DemandeBillets3.js DemandeBillets3::retrieveDemandeBillets3()");
    DemandeBilletAction.getDemandeBillets3()
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

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('Form Submitted');
  };

  render() {
    const { carMake, carModel, carYear, category, posts } = this.state;

    const filterMake = posts.filter(
      post => post.carMake.toLowerCase().indexOf(carMake.toLowerCase()) !== -1
    );
    const filterModel = posts.filter(
      post => post.carModel.toLowerCase().indexOf(carModel.toLowerCase()) !== -1
    );
    const filterYear = posts.filter(
      post => post.carYear.toString().indexOf(carYear.toString()) !== -1
    );
    const filterCategory = posts.filter(
      post => post.category.toLowerCase().indexOf(category.toLowerCase()) !== -1
    );

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-2 col-lg-3 col-md-4 col-sm-12'>
            <Sidebar
              carMake={carMake}
              carModel={carModel}
              carYear={carYear}
              category={category}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={event => {
                event.preventDefault();
                this.handleFormSubmit(event);
              }}
            />
          </div>
          <div className='col-xl-8 col-lg-7 col-md-6 col-sm-12 offset-md-1'>
            {carMake && carModel && carYear && category
              ? filterCategory.map(post => (
                  <PostContainer post={post} key={post.id} />
                ))
              : carMake && carModel && carYear
              ? filterYear.map(post => (
                  <PostContainer post={post} key={post.id} />
                ))
              : carMake && carModel
              ? filterModel.map(post => (
                  <PostContainer post={post} key={post.id} />
                ))
              : carMake
              ? filterMake.map(post => (
                  <PostContainer post={post} key={post.id} />
                ))
              : posts.map(post => <PostContainer post={post} key={post.id} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Posts);*/
/*
  render() {
    const { DemandeBillets3, currentDemandeBillet, currentIndex } = this.state; 
  }
  render() { 
  return (
    
    <><div className="section big-55-height over-hide z-bigger">
          <div className="parallax parallax-top" style={{ backgroundImage: 'url(img/3.jpg)' }}></div>
          <div className="dark-over-pages"></div>
          
          <div className="hero-center-section pages">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-33 parallax-fade-top">
                          <div className="hero-text">les  Demandes de Billets d'avions</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container pad">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                           
                            <div className="card-body">
                                <form>
                                    
                                <label htmlFor="personnel">personnel :</label>
                                    <div className="form-group "> 
                                        
                                    <select onChange={this.changePersonnelHandler} value={this.state.personnel.matricule} required>  <option></option>       {   this.state.Personnels.map((option) => (
                                        
              <option value={option.matricule} >{option.matricule} </option>
           ))} </select> </div>
          <br></br>
           <div className="form-group "> 
           <label htmlFor="typeBillet">type Billet :</label>
       <select onChange={this.changeTypeBilletHandler} value={this.state.typeBillet} required>  <option></option>       {   this.state.typeBillets.map((option) => (
           
<option value={option.id} >{option.id}   </option>
))} </select> </div>
                                    
                                    <div className="form-group "> 
                                        <label htmlFor="parcours">parcours :</label>
                                    <select onChange={this.changeParcoursHandler} value={this.state.parcours} required>  <option></option>       {   this.state.Parcours.map((option) => (
                                        
              <option value={option.id} >{option.id}   </option>
           ))} </select> </div>
                                
                                    <div className="form-group "> 
                                        <label htmlFor="compagnie">compagnie :</label>
                                    <select onChange={this.changeCompagnieHandler} value={this.state.compagnie.id} required>  <option></option>       {   this.state.Compagnies.map((option) => (
                                        
              <option value={option.id} > {option.id}   </option>
           ))} </select> </div>




                                    <div className="col-12 ">

 <DatePicker selected={this.state.dateAller}
            showPopperArrow={false}
            onChange={(e) => {
                this.setState({dateAller: e})
                console.log(e)
            }}/>

</div>   
<div className="col-12 ">

 <DatePicker selected={this.state.dateRetour}
            showPopperArrow={false}
            onChange={(e) => {
                this.setState({dateRetour: e})
                console.log(e)
            }}/>

</div>
                                   <button className="btn btn-primary"  type="submit">Save</button>
                                    <button className="btn btn-primary" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div></> 
)
                      }}*/

/*
<div>
              <h3 className="text-center">DemandeBillets3 List</h3>
              <form onSubmit={this.retrieveDemandeBillets3()}>
              <div className="container pad">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                           
                            <div className="card-body">
                                <form onSubmit={this.saveOrUpdateDemandeBillet}>
                                    
                                    
                                    <div className="form-group "> 
                                        <label htmlFor="personnel">personnel :</label><br />
                                    <select onChange={this.changePersonnelHandler} value={this.state.personnel.matricule} required>  <option></option>       {   this.state.Personnels.map((option) => (
                                        
              <option value={option.matricule} >{option.matricule} </option>
           ))} </select> </div>
           <div className="form-group "> 
           <label htmlFor="typeBillet">type Billet :</label><br />
       <select onChange={this.changeTypeBilletHandler} value={this.state.typeBillet.id} required>  <option></option>       {   this.state.typeBillets.map((option) => (
           
<option value={option.id} >{option.id}   </option>
))} </select> </div>
                                    
                                    <div className="form-group "> 
                                        <label htmlFor="parcours">parcours :</label><br />
                                    <select onChange={this.changeParcoursHandler} value={this.state.parcours.id} required>  <option></option>       {   this.state.Parcours.map((option) => (
                                        
              <option value={option.id} >{option.id}   </option>
           ))} </select> </div>
                                
                                    <div className="form-group "> 
                                        <label htmlFor="compagnie">compagnie :</label><br />
                                    <select onChange={this.changeCompagnieHandler} value={this.state.compagnie.id} required>  <option></option>       {   this.state.Compagnies.map((option) => (
                                        
              <option value={option.id} > {option.id}   </option>
           ))} </select> </div>




                                    <div className="col-12 ">

 <DatePicker selected={this.state.dateAller}
            showPopperArrow={false}
            onChange={(e) => {
                this.setState({dateAller: e})
                console.log(e)
            }}/>

</div>   
<div className="col-12 ">

 <DatePicker selected={this.state.dateRetour}
            showPopperArrow={false}
            onChange={(e) => {
                this.setState({dateRetour: e})
                console.log(e)
            }}/>

</div>
                                    <button className="btn btn-primary"  type="submit">Save</button>
                                    <button className="btn btn-primary" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div></>
            
        )
    }
}*/}