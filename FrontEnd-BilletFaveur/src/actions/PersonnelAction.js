/*import {GET_PERSONNELS, GET_PERSONNEL, EDIT_PERSONNEL, ADD_PERSONNEL, DELETE_PERSONNEL, URL} from "../keys"
import axios from "axios"

export const getPERSONNELs = () => async (dispatch) => {
    const res = await axios.get(URL + "/PERSONNEL/all")
    await dispatch({
        type: GET_PERSONNELS,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/PERSONNEL/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_PERSONNELS,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getPERSONNEL = (id) => async (dispatch) => {
    await dispatch({
        type: GET_PERSONNEL,
        data: id
    })

}
export const editPERSONNEL = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_PERSONNEL,
        data: id
    })
}
export const addPERSONNEL = (u) => (dispatch) => {
    dispatch({
        type: ADD_PERSONNEL,
        data: u
    })
}

export const deletePERSONNEL = (id) => (dispatch) => {
    dispatch({
        type: DELETE_PERSONNEL,
        data: id
    })
}*/ 

import axios from "axios";
import http from "../http-common";
const Personnel_API_BASE_URL = "http://localhost:8080/api/test/rest/personnels";

class PersonnelAction {

    getPersonnels(){
        return axios.get(Personnel_API_BASE_URL);
    }
    getAllPersonnels = (id_u) => {

        return new Promise((resolve, reject) => {
            axios
            .get('http://localhost:8080/api/test/rest/personnels/'+ id_u)
            .then(personnels => {
                resolve({ personnels : personnels.data.details })
            })
        })
    }
   
    createPersonnel(Personnel){
        return axios.post(Personnel_API_BASE_URL, Personnel);
    }

    getPersonnelById(PersonnelId){
        return axios.get(Personnel_API_BASE_URL + '/' + PersonnelId);
    }

    updatePersonnel(Personnel, PersonnelId){
        return axios.put(Personnel_API_BASE_URL + '/' + PersonnelId, Personnel);
    }

    deletePersonnel(PersonnelId){
        return axios.delete(Personnel_API_BASE_URL + '/' + PersonnelId);
    }
    
}  
export default new PersonnelAction();