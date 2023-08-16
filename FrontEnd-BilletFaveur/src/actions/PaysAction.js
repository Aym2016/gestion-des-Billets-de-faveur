import {GET_PayS, GET_Pay, EDIT_Pay, ADD_Pay, DELETE_Pay, URL} from "../keys"
import axios from "axios";
import http from "../http-common";
const Pay_API_BASE_URL = "http://localhost:8080/api/test/rest/Pays";

class PayAction {

    getPays(){
        return axios.get(Pay_API_BASE_URL);
    }

    createPays(Pay){
        return axios.post(Pay_API_BASE_URL, Pay);
    }

    getPaysById(PayId){
        return axios.get(Pay_API_BASE_URL + '/' + PayId);
    }

    updatePays(Pay, PayId){
        return axios.put(Pay_API_BASE_URL + '/' + PayId, Pay);
    }

    deletePays(PayId){
        return axios.delete(Pay_API_BASE_URL + '/' + PayId);
    }
    
} 
export default new PayAction();
  /*update = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_Pay,
        data: id
    })
}*/
  /*delete(id) {
    return axios.delete(URL +`/Pay/${id}`);
  }
 
  
  deleteAll() {
    return axios.delete(URL +`/Pay`);
  }

  findByTitle(libelle) {
    return axios.get(URL +`/Pays?title=${libelle}`);
  }
}





/*
import {GET_PayS, GET_Pay, EDIT_Pay, ADD_Pay, DELETE_Pay, URL} from "../keys"
//import axios from "axios"
import axios from "axios"


export const getPays = () => async (dispatch) => {
    const res = await axios.get(URL + "/Pay/all")
    await dispatch({
        type: GET_PayS,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/Pay/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_PayS,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getPay = (id) => async (dispatch) => {
    await dispatch({
        type: GET_Pay,
        data: id
    })

}
export const editPay = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_Pay,
        data: id
    })
}
export const addPay = (u) => (dispatch) => {
    dispatch({
        type: ADD_Pay,
        data: u
    })
}

export const deletePay = (id) => (dispatch) => {
    dispatch({
        type: DELETE_Pay,
        data: id
    })
}*/