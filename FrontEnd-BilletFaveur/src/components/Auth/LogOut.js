import React, {Component} from 'react';
import App from '../../App.tsx';
//import AuthService from '../actions/AuthService';
import Axios from 'axios';
class LogOut extends Component {
    componentWillMount() {
        //localStorage.removeItem("user")
        localStorage.clear();
        localStorage.removeItem("token")
          /*localStorage.removeItem("Object")*/
        
        //AuthService.LogOut()
        //Axios.get(URL + "api/basic/basiclogout")
        /* this.state)
        
        .then(response => {
            this.setState({userDate: response.data}, () => {
                localStorage.setItem('token', JSON.stringify(response.data));
            });
            window.location.reload(false);
            this.props.history.push('/')
        })
        .catch(error => {
            console.log(error);
        })*/
       this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Log out .........</h1>
            </div>
        );
    }
}

export default LogOut;