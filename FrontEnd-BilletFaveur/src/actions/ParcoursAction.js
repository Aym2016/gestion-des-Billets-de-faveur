import {GET_ParcourS, GET_Parcour, EDIT_Parcour, ADD_Parcour, DELETE_Parcour, URL} from "../keys"
import axios from "axios";
import http from "../http-common";
const Parcour_API_BASE_URL = "http://localhost:8080/api/test/rest/Parcours";

class ParcoursAction {

    getParcours(){
        return axios.get(Parcour_API_BASE_URL);
    }

    createParcours(Parcour){
        return axios.post(Parcour_API_BASE_URL, Parcour);
    }

    getParcoursById(ParcourId){
        return axios.get(Parcour_API_BASE_URL + '/' + ParcourId);
    }

    updateParcours(Parcour, ParcourId){
        return axios.put(Parcour_API_BASE_URL + '/' + ParcourId, Parcour);
    }

    deleteParcours(ParcourId){
        return axios.delete(Parcour_API_BASE_URL + '/' + ParcourId);
    }
    
} 
export default new ParcoursAction();
  /*update = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_Parcour,
        data: id
    })
}*/
  /*delete(id) {
    return axios.delete(URL +`/Parcour/${id}`);
  }
 
  
  deleteAll() {
    return axios.delete(URL +`/Parcour`);
  }

  findByTitle(libelle) {
    return axios.get(URL +`/Parcours?title=${libelle}`);
  }
}





/*
import {GET_ParcourS, GET_Parcour, EDIT_Parcour, ADD_Parcour, DELETE_Parcour, URL} from "../keys"
//import axios from "axios"
import axios from "axios"


export const getParcours = () => async (dispatch) => {
    const res = await axios.get(URL + "/Parcour/all")
    await dispatch({
        type: GET_ParcourS,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/Parcour/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_ParcourS,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getParcour = (id) => async (dispatch) => {
    await dispatch({
        type: GET_Parcour,
        data: id
    })

}
export const editParcour = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_Parcour,
        data: id
    })
}
export const addParcour = (u) => (dispatch) => {
    dispatch({
        type: ADD_Parcour,
        data: u
    })
}

export const deleteParcour = (id) => (dispatch) => {
    dispatch({
        type: DELETE_Parcour,
        data: id
    })
}*/