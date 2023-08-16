import {GET_COMPAGNIES, GET_COMPAGNIE, EDIT_COMPAGNIE, ADD_COMPAGNIE, DELETE_COMPAGNIE, URL} from "../keys"
import axios from "axios";
import http from "../http-common";
const Compagnie_API_BASE_URL = "http://localhost:8080/api/test/rest/compagnies";

class CompagnieAction {

    getCompagnies(){
       /* let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
      
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
        headers.append('Access-Control-Allow-Credentials', 'true');
      
        headers.append('GET', 'POST', 'OPTIONS');*/
        axios.defaults.headers = {
            'Content-Type': 'application/json',

        }
        return axios.get(Compagnie_API_BASE_URL);
    }

    createCompagnie(Compagnie){
        //let headers = new Headers();
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            

        }
       /* headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
      
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');
      
        headers.append('GET', 'POST', 'OPTIONS');*/
        return axios.post(Compagnie_API_BASE_URL, Compagnie).then(response => {
            this.setState({userDate: response.data}, () => {
                localStorage.setItem('token', JSON.stringify(response.data));
            });
            window.location.reload(false);
            this.props.history.push('/')
        })
        .catch(error => {
            console.log(error);
        })
       /* method:"POST", mode: "cors",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Compagnie)})*/
    }

    getCompagnieById(CompagnieId){
        return axios.get(Compagnie_API_BASE_URL + '/' + CompagnieId);
    }

    updateCompagnie(Compagnie, CompagnieId){
        return axios.put(Compagnie_API_BASE_URL + '/' + CompagnieId, Compagnie);
    }

    deleteCompagnie(CompagnieId){
        return axios.delete(Compagnie_API_BASE_URL + '/' + CompagnieId);
    }
    
} 
export default new CompagnieAction();
  /*update = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_COMPAGNIE,
        data: id
    })
}*/
  /*delete(id) {
    return axios.delete(URL +`/compagnie/${id}`);
  }
 
  
  deleteAll() {
    return axios.delete(URL +`/compagnie`);
  }

  findByTitle(libelle) {
    return axios.get(URL +`/compagnies?title=${libelle}`);
  }
}





/*
import {GET_COMPAGNIES, GET_COMPAGNIE, EDIT_COMPAGNIE, ADD_COMPAGNIE, DELETE_COMPAGNIE, URL} from "../keys"
//import axios from "axios"
import axios from "axios"


export const getCompagnies = () => async (dispatch) => {
    const res = await axios.get(URL + "/compagnie/all")
    await dispatch({
        type: GET_COMPAGNIES,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/COMPAGNIE/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_COMPAGNIES,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getCOMPAGNIE = (id) => async (dispatch) => {
    await dispatch({
        type: GET_COMPAGNIE,
        data: id
    })

}
export const editCOMPAGNIE = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_COMPAGNIE,
        data: id
    })
}
export const addCOMPAGNIE = (u) => (dispatch) => {
    dispatch({
        type: ADD_COMPAGNIE,
        data: u
    })
}

export const deleteCOMPAGNIE = (id) => (dispatch) => {
    dispatch({
        type: DELETE_COMPAGNIE,
        data: id
    })
}*/