import React, {Component} from 'react'
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import DemandeBilletAction from "../../actions/DemandeBilletAction";
//import DemandeBillet from "./DemandeBillet";
import DatePicker from "react-datepicker";
const Personnel_API_BASE_URL = "http://localhost:8080/api/test/rest/personnels"; 
const Parcours_API_BASE_URL = "http://localhost:8080/api/test/rest/Parcours"; 
const TypeBillet_API_BASE_URL = "http://localhost:8080/api/test/rest/TypeBillets"; 
const Compagnie_API_BASE_URL = "http://localhost:8080/api/test/rest/compagnies"; 
export default class DemandeBillets3 extends Component {
 

  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveDemandeBillets3 = this.retrieveDemandeBillets3.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDemandeBillet = this.setActiveDemandeBillet.bind(this);
    this.removeAllDemandeBillets3 = this.removeAllDemandeBillets3.bind(this);
    //this.searchCode = this.searchCode.bind(this);

    this.state = {
      DemandeBillets: [],
      currentDemandeBillet:DemandeBillets3,
      currentIndex: "",
      currentDemandeBillet:DemandeBillets3,
     // searchTitle: ""
      loading:true,
      id: this.props.match.params.id,
           
            personnel: 0,
            TypeBillet:0,
            parcours: 0,
            compagnie:0,
            dateAller:new DatePicker("2-07-16") ,
            dateRetour:new DatePicker("2099-07-16"),
            Personnels:[],
            typeBillets:[],
            Parcours:[],
            Compagnies:[], 
            


    };
   // this.componentDidMount=this.componentDidMount.bind(this)
   /*this.addDemandeBillet = this.addDemandeBillet.bind(this);
    this.editDemandeBillet = this.editDemandeBillet.bind(this);
    this.deleteDemandeBillet = this.deleteDemandeBillet.bind(this);*/
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
  this.setState({TypeBillet:event.target.value});
}
changeCompagnieHandler= (event) => {
  this.setState({compagnie:event.target.value});
} 
changeParcoursHandler= (event) => {
  this.setState({parcours:event.target.value});
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
  console.log("src/components/DemandeBillet/DemandeBillets3.js DemandeBillets3::componentDidMount()");
  /*fetch(Personnel_API_BASE_URL)
  .then(response=>response.json())
  .then(data=>{
      this.setState({Personnels:data});
  });
  fetch(TypeBillet_API_BASE_URL)
  .then(response=>response.json())
  .then(data=>{
      this.setState({typeBillets:data});
  });
  fetch(Compagnie_API_BASE_URL)
  .then(response=>response.json())
  .then(data=>{
      this.setState({Compagnies:data});
  });
  fetch(Parcours_API_BASE_URL)
  .then(response=>response.json())
  .then(data=>{
      this.setState({Parcours:data});
  });*/
  
  DemandeBilletAction.getDemandeBillets3().then((res) => {
        this.setState({ DemandeBillets: res.data});
    });

}

addDemandeBillet(){
    this.props.history.push('/add-DemandeBillet/_add');
}

 componentDidMount() {
  this.retrieveDemandeBillets3();  
  } 
  
  retrieveDemandeBillets3() {
    console.log("src/components/DemandeBillet/DemandeBillets3.js DemandeBillets3::retrieveDemandeBillets3()");
   
    DemandeBilletAction.//getDemandeBillets3(this.state.typeBillet)
    getDemandeBillets4(this.state.personnel,
      this.state.TypeBillet,this.state.parcours)
      //,this.state.dateAller,this.state.dateRetour)
      .then(response => {
        this.setState({
          DemandeBillets: response.data,
          
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      },[]);
  }

  refreshList() {
    console.log("src/components/DemandeBillet/DemandeBillets3.js DemandeBillets3::componentDidMount()");

    this.retrieveDemandeBillets3();
    this.setState({
      currentDemandeBillet: 1,
      currentIndex: ""
    });
  }

  setActiveDemandeBillet(DemandeBillet, index) {
    this.setState({
      currentDemandeBillet: DemandeBillet,
      currentIndex: index
    });
  }

  removeAllDemandeBillets3() {
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


  render() {        
    return (
       
       <><div>
            <div className="section big-55-height over-hide z-bigger">
                <div className="parallax parallax-top" style={{ backgroundImage: 'url(img/1.jpg)' }}></div>
                <div className="dark-over-pages"><h3 className="text-center"></h3></div>

                <div className="hero-center-section pages">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 parallax-fade-top">
                                <div className="hero-text"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pad">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                       
                        <div className="card-body">
                            <form onSelect={this.retrieveDemandeBillets3()} >
                            <div className="form-group">
                                        <label> personnel: </label>
                                        <input placeholder="personnel" name="personnel" className="form-control"
                                            value={this.state.personnel} onChange={this.changePersonnelHandler} />
                                    </div>
                                    {/*<div className="form-group">
                                        <label> Compagnie: </label>
                                        <input placeholder="Compagnie" name="libelle" className="form-control"
                                            value={this.state.compagnie} onChange={this.changeCompagnieHandler} />
    </div>*/}
                                    <div className="form-group">
                                        <label> parcours: </label>
                                        <input placeholder="Parcours" name="Parcours" className="form-control"
                                            value={this.state.parcours} onChange={this.changeParcoursHandler} />
                                    </div> 
                                    <div className="form-group">
                                        <label> typeBillet: </label>
                                        <input placeholder="TypeBillet" name="TypeBillet" className="form-control"
                                            value={this.state.TypeBillet} onChange={this.changeTypeBilletHandler} />
                                    </div>
                                
                               

                               {/* <div className="col-12 ">

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

      </div>*/}
<button className="btn btn-primary"  type="submit">chercher demande</button>
{/*<button className="btn btn-primary" onClick={this.refreshList} style={{ marginLeft: "10px" }}>Cancel</button>  */}                            
                            </form>

                            
                        </div>
                    </div>
                </div>

            </div>
        </div><div>
              <h2 className="text-center">DemandeBillets List</h2>
              
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
                                     
                                      {/*<button style={{ marginLeft: "10px" }} onClick={() => this.deleteDemandeBillet(DemandeBillet.id)} className="btn btn-primary">Delete </button>*/}
                                      
                                  </td>
                              </tr>
                          )}
                      </tbody>
                  </table>

              </div>
          

          </div>
        
        
        
        </>
        
    )
}
}                   
  const mapStateToProps = (state) => {
  return {
      DemandeBillets3: state.DemandeBillets3.DemandeBillets3
  }
}

