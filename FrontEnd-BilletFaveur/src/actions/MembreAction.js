import {GET_MembreS, GET_Membre, EDIT_Membre, ADD_Membre, DELETE_Membre, URL} from "../keys"
import axios from "axios";
import http from "../http-common";
const Membre_API_BASE_URL = "http://localhost:8080/api/test/rest/Membres";

class MembreAction {

    getMembres(){
        return axios.get(Membre_API_BASE_URL);
    }
    getMembres2(id){
        return axios.get("http://localhost:8080/api/test/rest/MembreSearch?personnel="+id);
    }
    
    createMembre(Membre){
        return axios.post(Membre_API_BASE_URL, Membre);
    }

    getMembreById(MembreId){
        return axios.get(Membre_API_BASE_URL + '/' + MembreId);
    }

    updateMembre(Membre, MembreId){
        return axios.put(Membre_API_BASE_URL + '/' + MembreId, Membre);
    }

    deleteMembre(MembreId){
        return axios.delete(Membre_API_BASE_URL + '/' + MembreId);
    }
    
} 
export default new MembreAction();
  /*update = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_Membre,
        data: id
    })
}*/
  /*delete(id) {
    return axios.delete(URL +`/Membre/${id}`);
  }
 
  
  deleteAll() {
    return axios.delete(URL +`/Membre`);
  }

  findByTitle(libelle) {
    return axios.get(URL +`/Membres?title=${libelle}`);
  }
}





/*
import {GET_MembreS, GET_Membre, EDIT_Membre, ADD_Membre, DELETE_Membre, URL} from "../keys"
//import axios from "axios"
import axios from "axios"


export const getMembres = () => async (dispatch) => {
    const res = await axios.get(URL + "/Membre/all")
    await dispatch({
        type: GET_MembreS,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/Membre/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_MembreS,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getMembre = (id) => async (dispatch) => {
    await dispatch({
        type: GET_Membre,
        data: id
    })

}
export const editMembre = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_Membre,
        data: id
    })
}
export const addMembre = (u) => (dispatch) => {
    dispatch({
        type: ADD_Membre,
        data: u
    })
}

export const deleteMembre = (id) => (dispatch) => {
    dispatch({
        type: DELETE_Membre,
        data: id
    })
}*/