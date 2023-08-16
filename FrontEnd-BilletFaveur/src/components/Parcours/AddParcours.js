import React, {Component} from 'react'
//import './Auth.css'
import Axios from 'axios'
import {URL} from '../../keys'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
/*<div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail1">Code</label>
                                            <input type="text" name="code" defaultValue={code}
                                                   onChange={this.inputValueChange} className="form-control" required
                                                   id="exampleInputEmail1" aria-describedby="emailHelp"
                                                   placeholder="Enter nouveau compagnie"/>
                                        </div>*/
// import 'font-awesome/css/font-awesome.min.css'
export default class AddParcours extends Component {

    constructor() {
        super()
        this.state = {
            code: null,
            libelle: '',
            type:'',
            
        }
    }

    componentWillMount() {
        if (localStorage.getItem("token") != null) {
            this.props.history.push('/')
        }
    }

    inputValueChange = e => this.setState({[e.target.name]: e.target.value});
    AddParcours = (event) => {
        // event.preventDefault()   
        console.log(this.state);

        Axios.post(URL + '/parcours/save', this.state)
            .then(response => {
                console.log(response.data);
                window.location.reload(false);
                //this.props.history.push('/signin')
            })
            .catch(error => console.log(error))
    }
    


    render() {
        const {libelle,type} = this.state
        return (
            <div>
                <div className="section big-55-height over-hide z-bigger">
                    <div className="parallax parallax-top" style={{backgroundImage: 'url(img/1.jpg)'}}></div>
                    <div className="dark-over-pages"></div>

                    <div className="hero-center-section pages">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 parallax-fade-top">
                                    <div className="hero-text">Ajouter  des Parcours</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pad">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card" style={{textAlign: "left"}}>
                                <div className="card-header">
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.AddParcours}>
                                        
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">libelle</label>
                                            <input type="text" name="libelle" defaultValue={libelle}
                                                   onChange={this.inputValueChange} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="Entrer libelle Parcours"/>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">type parcours</label>
                                            <input type="text" name="type" defaultValue={type}
                                                   onChange={this.inputValueChange} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="Entrer type Parcours"/>
                                        </div>
                                       
                                        
                                        <button type="submit" className="btn btn-primary">Ajouter Nouveau Parcours</button>
                                    </form>
                                </div>
                                <div className="card-footer text-muted">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




















/*import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function parcour() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[parcours,setparcours]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const parcour={name,address}
    console.log(parcour)
    fetch("http://localhost:8080/parcours/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(parcour)

  }).then(()=>{
    console.log("New parcour added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/parcours/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setparcours(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add parcour</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="parcour Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="parcour Adress" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>parcours</h1>

    <Paper elevation={3} style={paperStyle}>

      {parcours.map(parcour=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={parcour.id}>
         Id:{parcour.id}<br/>
         Name:{parcour.name}<br/>
         Address:{parcour.address}

        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}*/