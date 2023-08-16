   
import React, { Component } from 'react'
import CompagnieAction from "../../actions/CompagnieAction";
import Axios from 'axios';
class UpdateCompagnieComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            compagnie: {id: this.props.match.params.id,
            code: '',
            libelle: ''}
            
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.updateCompagnie = this.updateCompagnie.bind(this);
    }

    componentDidMount(){
        CompagnieAction.getCompagnieById(this.state.id).then( (res) =>{
            let Compagnie = res.data;
            this.setState({code: Compagnie.code,
                libelle: Compagnie.libelle,
                
            });
        });
    }

    updateCompagnie = (e) => {
        e.preventDefault();
        let compagnie = {code: this.state.code, libelle: this.state.libelle };
        console.log('compagnie => ' + JSON.stringify(compagnie));
        console.log('id => ' + JSON.stringify(this.state.id));
        CompagnieAction.updateCompagnie( compagnie,this.state.id).then( res => {
            this.props.history.push('/Compagnies');
        });
    }
    //inputValueChange = e => this.setState({[e.target.name]: e.target.value});
    /*$$updateCompagnie1(id) = (event) => {
        // event.preventDefault()   
        console.log(this.state);

        Axios.put(URL + '/compagnie/', this.state)
            .then(response => {
                console.log(response.data);
                window.location.reload(false);
                //this.props.history.push('/signin')
            })
            .catch(error => console.log(error))
    }*/
   /* inputValueChange = e => this.setState({[e.target.name]: e.target.value});
    updateTutorial() {
        CompagnieAction.update(
          this.state.compagnie.id,
          this.state.compagnie
        )
          .then(response => {
            console.log(response.data);
            this.setState({
              message: "The tutorial was updated successfully!"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }*/
    changeCodeHandler= (event) => {
        this.setState({code: event.target.value});
    }

    changeLibelleHandler= (event) => {
        this.setState({libelle: event.target.value});
    }

    /*changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }*/

    cancel(){
        this.props.history.push('/Compagnies');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Compagnie</h3>
                                <div className = "card-body">
                                <form>
                                        <div className = "form-group">
                                            <label> Code: </label>
                                            <input placeholder="code" name="Code" className="form-control" 
                                                value={this.state.code} onChange={this.changeCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Libelle: </label>
                                            <input placeholder="Libelle" name="libelle" className="form-control" 
                                                value={this.state.libelle} onChange={this.changeLibelleHandler}/>
                                        </div>
                                        
                                       {/* <button type="submit" className="btn btn-primary">Save</button>*/}
                                        <button className="btn btn-primary" onClick={this.updateCompagnie}>Save</button>
                                        <button className="btn btn-primary" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateCompagnieComponent
