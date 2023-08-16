//import {GET_TypeBilletS, GET_TypeBillet, EDIT_TypeBillet, ADD_TypeBillet, DELETE_TypeBillet, URL} from "../keys"
import axios from "axios";
import http from "../http-common";
const TypeBillet_API_BASE_URL = "http://localhost:8080/api/test/rest/TypeBillets";

class TypeBilletAction {

    getTypeBillets(){
        return axios.get(TypeBillet_API_BASE_URL);
    }

    createTypeBillet(TypeBillet){
        return axios.post(TypeBillet_API_BASE_URL, TypeBillet);
    }

    getTypeBilletById(TypeBilletId){
        return axios.get(TypeBillet_API_BASE_URL + '/' + TypeBilletId);
    }

    updateTypeBillet(TypeBillet, TypeBilletId){
        return axios.put(TypeBillet_API_BASE_URL + '/' + TypeBilletId, TypeBillet);
    }

    deleteTypeBillet(TypeBilletId){
        return axios.delete(TypeBillet_API_BASE_URL + '/' + TypeBilletId);
    }
    
} 
export default new TypeBilletAction();
  /*update = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_TypeBillet,
        data: id
    })
}*/
  /*delete(id) {
    return axios.delete(URL +`/TypeBillet/${id}`);
  }
 
  
  deleteAll() {
    return axios.delete(URL +`/TypeBillet`);
  }

  findByTitle(libelle) {
    return axios.get(URL +`/TypeBillets?title=${libelle}`);
  }
}





/*
import {GET_TypeBilletS, GET_TypeBillet, EDIT_TypeBillet, ADD_TypeBillet, DELETE_TypeBillet, URL} from "../keys"
//import axios from "axios"
import axios from "axios"


export const getTypeBillets = () => async (dispatch) => {
    const res = await axios.get(URL + "/TypeBillet/all")
    await dispatch({
        type: GET_TypeBilletS,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/TypeBillet/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_TypeBilletS,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getTypeBillet = (id) => async (dispatch) => {
    await dispatch({
        type: GET_TypeBillet,
        data: id
    })

}
export const editTypeBillet = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_TypeBillet,
        data: id
    })
}
export const addTypeBillet = (u) => (dispatch) => {
    dispatch({
        type: ADD_TypeBillet,
        data: u
    })
}

export const deleteTypeBillet = (id) => (dispatch) => {
    dispatch({
        type: DELETE_TypeBillet,
        data: id
    })
}*/