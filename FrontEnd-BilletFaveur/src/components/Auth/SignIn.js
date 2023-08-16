import React, {Component} from 'react'
import './Auth.css'
//  import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {URL} from '../../keys'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import 'font-awesome/css/font-awesome.min.css'
export default class SignIn extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            userData: null,
            formErrors:'',

        }
       
    }
 
validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.username;
  let passwordValid = this.state.password;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.passwordValid});
}

    componentWillMount() {
        if(localStorage.getItem("token") != null){
            this.props.history.push('/')
        }
       
    }
    
    


    signUp = (event) => {
        event.preventDefault()

/*        let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');*/

  //headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));


        Axios.defaults.headers = {
            'Content-Type': 'application/json',

        }
       
        //AuthService.login(username, password)
        Axios.post(URL + "/api/auth/signin", this.state)
        
            .then(response => {
                this.setState({userDate: response.data}, () => {
                    localStorage.setItem('token', JSON.stringify(response.data));
                });
                window.location.reload(false);
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    inputValueChange = e => this.setState({[e.target.name]: e.target.value});
      


    render() {
        const {username, password} = this.state
      /*  validateField(fieldName, value) {
            let fieldValidationErrors = this.state.formErrors;
            let emailValid = username;
            let passwordValid = password;
          
            switch(fieldName) {
              case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
              case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
              default:
                break;
            }
            this.setState({formErrors: fieldValidationErrors,
                            emailValid: emailValid,
                            passwordValid: passwordValid
                          }, this.validateForm);
          }*/
    
        return (
            <div>
                <div className="section big-55-height over-hide z-bigger">
                    <div className="parallax parallax-top" style={{backgroundImage: 'url(img/1.jpg)'}}></div>
                    <div className="dark-over-pages"></div>

                    <div className="hero-center-section pages">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 parallax-fade-top">
                                    <div className="hero-text">SIGN IN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card" style={{textAlign: "left"}}>
                                <div className="card-body p-5">
                                    <form onSubmit={this.signUp}>
                                        <div className="form-row pad">
                                            <div className="col">
                                                <input type="text" name="username" defaultValue={username}
                                                       onChange={this.inputValueChange}
                                                       className="form-control input_sing"
                                                       required
                                                       id="exampleInputEmail3" aria-describedby="emailHelp"
                                                       placeholder="Enter votre email"/>
                                            </div>
                                            <div className="col">
                                                <input type="password" name="password" defaultValue={password}
                                                       onChange={this.inputValueChange}
                                                       className="form-control input_sing"
                                                       required 
                                                       id="exampleInputEmail" aria-describedby="emailHelp"
                                                       placeholder="Enter votre mot de passe"/>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block mt-2" >SIGN IN
                                            </button>
                                        </div>
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
