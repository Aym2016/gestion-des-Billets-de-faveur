import {GET_TypeDecisionS, GET_TypeDecision, EDIT_TypeDecision, ADD_TypeDecision, DELETE_TypeDecision, URL} from "../keys"
import axios from "axios";
import http from "../http-common";
const TypeDecision_API_BASE_URL = "http://localhost:8080/api/test/rest/TypeDecisions";

class TypeDecisionAction {

    getTypeDecisions(){
        return axios.get(TypeDecision_API_BASE_URL);
    }

    createTypeDecision(TypeDecision){
        return axios.post(TypeDecision_API_BASE_URL, TypeDecision);
    }

    getTypeDecisionById(TypeDecisionId){
        return axios.get(TypeDecision_API_BASE_URL + '/' + TypeDecisionId);
    }

    updateTypeDecision(TypeDecision, TypeDecisionId){
        return axios.put(TypeDecision_API_BASE_URL + '/' + TypeDecisionId, TypeDecision);
    }

    deleteTypeDecision(TypeDecisionId){
        return axios.delete(TypeDecision_API_BASE_URL + '/' + TypeDecisionId);
    }
    
} 
export default new TypeDecisionAction();
  /*update = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_TypeDecision,
        data: id
    })
}*/
  /*delete(id) {
    return axios.delete(URL +`/TypeDecision/${id}`);
  }
 
  
  deleteAll() {
    return axios.delete(URL +`/TypeDecision`);
  }

  findByTitle(libelle) {
    return axios.get(URL +`/TypeDecisions?title=${libelle}`);
  }
}





/*
import {GET_TypeDecisionS, GET_TypeDecision, EDIT_TypeDecision, ADD_TypeDecision, DELETE_TypeDecision, URL} from "../keys"
//import axios from "axios"
import axios from "axios"


export const getTypeDecisions = () => async (dispatch) => {
    const res = await axios.get(URL + "/TypeDecision/all")
    await dispatch({
        type: GET_TypeDecisionS,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/TypeDecision/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_TypeDecisionS,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getTypeDecision = (id) => async (dispatch) => {
    await dispatch({
        type: GET_TypeDecision,
        data: id
    })

}
export const editTypeDecision = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_TypeDecision,
        data: id
    })
}
export const addTypeDecision = (u) => (dispatch) => {
    dispatch({
        type: ADD_TypeDecision,
        data: u
    })
}

export const deleteTypeDecision = (id) => (dispatch) => {
    dispatch({
        type: DELETE_TypeDecision,
        data: id
    })
}*/