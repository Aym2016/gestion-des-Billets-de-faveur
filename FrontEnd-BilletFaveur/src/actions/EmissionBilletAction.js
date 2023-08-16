/*import {GET_EmissionBILLETS, GET_EmissionBILLET, EDIT_EmissionBILLET, ADD_EmissionBILLET, DELETE_EmissionBILLET, URL} from "../keys"
import axios from "axios"

export const getEmissionBILLETs = () => async (dispatch) => {
    const res = await axios.get(URL + "/EmissionBILLET/all")
    await dispatch({
        type: GET_EmissionBILLETS,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/EmissionBILLET/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_EmissionBILLETS,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getEmissionBILLET = (id) => async (dispatch) => {
    await dispatch({
        type: GET_EmissionBILLET,
        data: id
    })

}
export const editEmissionBILLET = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_EmissionBILLET,
        data: id
    })
}
export const addEmissionBILLET = (u) => (dispatch) => {
    dispatch({
        type: ADD_EmissionBILLET,
        data: u
    })
}

export const deleteEmissionBILLET = (id) => (dispatch) => {
    dispatch({
        type: DELETE_EmissionBILLET,
        data: id
    })
}*/ 
import axios from "axios";
import http from "../http-common";
const EmissionBillet_API_BASE_URL = "http://localhost:8080/api/test/rest/EmissionBillets";

class EmissionBilletAction {

    getEmissionBillets(){
        return axios.get(EmissionBillet_API_BASE_URL);
    }

    createEmissionBillet(EmissionBillet){
        return axios.post(EmissionBillet_API_BASE_URL, EmissionBillet);
    }

    getEmissionBilletById(EmissionBilletId){
        return axios.get(EmissionBillet_API_BASE_URL + '/' + EmissionBilletId);
    }

    updateEmissionBillet(EmissionBillet, EmissionBilletId){
        return axios.put(EmissionBillet_API_BASE_URL + '/' + EmissionBilletId, EmissionBillet);
    }

    deleteEmissionBillet(EmissionBilletId){
        return axios.delete(EmissionBillet_API_BASE_URL + '/' + EmissionBilletId);
    }
    
} 

export default new EmissionBilletAction();