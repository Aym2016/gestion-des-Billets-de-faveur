import {GET_MotifS, GET_Motif, EDIT_Motif, ADD_Motif, DELETE_Motif, URL} from "../keys"
import axios from "axios";
import http from "../http-common";
const Motif_API_BASE_URL = "http://localhost:8080/api/test/rest/motifs";

class MotifAction {

    getMotifs(){
        return axios.get(Motif_API_BASE_URL);
    }

    createMotif(Motif){
        return axios.post(Motif_API_BASE_URL, Motif);
    }

    getMotifById(MotifId){
        return axios.get(Motif_API_BASE_URL + '/' + MotifId);
    }

    updateMotif(Motif, MotifId){
        return axios.put(Motif_API_BASE_URL + '/' + MotifId, Motif);
    }

    deleteMotif(MotifId){
        return axios.delete(Motif_API_BASE_URL + '/' + MotifId);
    }
    
} 
export default new MotifAction();
  /*update = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_Motif,
        data: id
    })
}*/
  /*delete(id) {
    return axios.delete(URL +`/Motif/${id}`);
  }
 
  
  deleteAll() {
    return axios.delete(URL +`/Motif`);
  }

  findByTitle(libelle) {
    return axios.get(URL +`/Motifs?title=${libelle}`);
  }
}





/*
import {GET_MotifS, GET_Motif, EDIT_Motif, ADD_Motif, DELETE_Motif, URL} from "../keys"
//import axios from "axios"
import axios from "axios"


export const getMotifs = () => async (dispatch) => {
    const res = await axios.get(URL + "/Motif/all")
    await dispatch({
        type: GET_MotifS,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/Motif/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_MotifS,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getMotif = (id) => async (dispatch) => {
    await dispatch({
        type: GET_Motif,
        data: id
    })

}
export const editMotif = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_Motif,
        data: id
    })
}
export const addMotif = (u) => (dispatch) => {
    dispatch({
        type: ADD_Motif,
        data: u
    })
}

export const deleteMotif = (id) => (dispatch) => {
    dispatch({
        type: DELETE_Motif,
        data: id
    })
}*/