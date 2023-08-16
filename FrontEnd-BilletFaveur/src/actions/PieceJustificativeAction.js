/*import {GET_PIECEJUSTIFICATIVES, GET_PIECEJUSTIFICATIVE, EDIT_PIECEJUSTIFICATIVE, ADD_PIECEJUSTIFICATIVE, DELETE_PIECEJUSTIFICATIVE, URL} from "../keys"
import axios from "axios"

export const getPIECEJUSTIFICATIVEs = () => async (dispatch) => {
    const res = await axios.get(URL + "/PIECEJUSTIFICATIVE/all")
    await dispatch({
        type: GET_PIECEJUSTIFICATIVES,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/PIECEJUSTIFICATIVE/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_PIECEJUSTIFICATIVES,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getPIECEJUSTIFICATIVE = (id) => async (dispatch) => {
    await dispatch({
        type: GET_PIECEJUSTIFICATIVE,
        data: id
    })

}
export const editPIECEJUSTIFICATIVE = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_PIECEJUSTIFICATIVE,
        data: id
    })
}
export const addPIECEJUSTIFICATIVE = (u) => (dispatch) => {
    dispatch({
        type: ADD_PIECEJUSTIFICATIVE,
        data: u
    })
}

export const deletePIECEJUSTIFICATIVE = (id) => (dispatch) => {
    dispatch({
        type: DELETE_PIECEJUSTIFICATIVE,
        data: id
    })
}*/ 

import axios from "axios";
import http from "../http-common";
const PieceJustificative_API_BASE_URL = "http://localhost:8080/api/test/rest/PieceJustificatives";

class PieceJustificativeAction {

    getPieceJustificatives(){
        return axios.get(PieceJustificative_API_BASE_URL);
    }

    createPieceJustificative(PieceJustificative){
        return axios.post(PieceJustificative_API_BASE_URL, PieceJustificative);
    }
    
    getPieceJustificatives2(id){
        return axios.get("http://localhost:8080/api/test/rest/PieceJustificativeSearch?personnel="+id);
    }
    getPieceJustificativeById(PieceJustificativeId){
        return axios.get(PieceJustificative_API_BASE_URL + '/' + PieceJustificativeId);
    }

    updatePieceJustificative(PieceJustificative, PieceJustificativeId){
        return axios.put(PieceJustificative_API_BASE_URL + '/' + PieceJustificativeId, PieceJustificative);
    }

    deletePieceJustificative(PieceJustificativeId){
        return axios.delete(PieceJustificative_API_BASE_URL + '/' + PieceJustificativeId);
    }
    
}  
export default new PieceJustificativeAction();