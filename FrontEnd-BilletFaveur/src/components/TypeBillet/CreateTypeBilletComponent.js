import React, { Component } from 'react'
import TypeBilletAction from '../../actions/TypeBilletAction';
//import TypeBilletService from '../services/TypeBilletService';
import Axios from 'axios';
export default class CreateTypeBilletComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            code: '',
            libelle: ''
            
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.saveOrUpdateTypeBillet = this.saveOrUpdateTypeBillet.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TypeBilletAction.getTypeBilletById(this.state.id).then( (res) =>{
                let TypeBillet = res.data;
                this.setState({code: TypeBillet.code, libelle: TypeBillet.libelle
                });
            });
        }        
    }
    saveOrUpdateTypeBillet = (e) => {
        e.preventDefault();
        let TypeBillet = {code: this.state.code, libelle: this.state.libelle};
        console.log('TypeBillet => ' + JSON.stringify(TypeBillet));

        // step 5
        if(this.state.id === '_add'){
            TypeBilletAction.createTypeBillet(TypeBillet).then(res =>{
                this.props.history.push('/TypeBillets');
            });
        }else{
            TypeBilletAction.updateTypeBillet(TypeBillet, this.state.id).then( res => {
                this.props.history.push('/TypeBillets');
            });
        }
    }
    AddTypeBillet = (event) => {
        // event.preventDefault()   
        console.log(this.state);

        Axios.post(URL + '/TypeBillet/save', this.state)
            .then(response => {
                console.log(response.data);
                window.location.reload(false);
                //this.props.history.push('/signin')
            })
            .catch(error => console.log(error))
    }
    
    changeCodeHandler= (event) => {
        this.setState({code: event.target.value});
    }

    changeLibelleHandler= (event) => {
        this.setState({libelle: event.target.value});
    }
    inputValueChange = e => this.setState({[e.target.name]: e.target.value});

    cancel(){
        this.props.history.push('/TypeBillets');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add TypeBillet</h3>
        }else{
            return <h3 className="text-center">Update TypeBillet</h3>
        }
    } 
    
    render() {        
        return (
           
           <><div>
                <div className="section big-55-height over-hide z-bigger">
                    <div className="parallax parallax-top" style={{ backgroundImage: 'url(img/1.jpg)' }}></div>
                    <div className="dark-over-pages"></div>

                    <div className="hero-center-section pages">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 parallax-fade-top">
                                    <div className="hero-text"> {this.getTitle()}</div>
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
                                    <div className="form-group">
                                        <label> code: </label>
                                        <input placeholder="Code" name="code" className="form-control"
                                           required value={this.state.code} onChange={this.changeCodeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Libelle: </label>
                                        <input placeholder="Libelle" name="libelle" className="form-control"
                                            required value={this.state.libelle} onChange={this.changeLibelleHandler} />
                                    </div>

                                 {/*   <div className="form-group">
                                        <label> Type: </label>
                                        <input placeholder="Libelle" name="libelle" className="form-control"
                                         required   value={this.state.libelle} onChange={this.changeTypeHandler} />
        </div>*/}
                                    <button className="btn btn-primary" onClick={this.saveOrUpdateTypeBillet}>Save</button>
                                    <button className="btn btn-primary" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div></>
            
        )
    }
}

 //CreateTypeBilletComponent;