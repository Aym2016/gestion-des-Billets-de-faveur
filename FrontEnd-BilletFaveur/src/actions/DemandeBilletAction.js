/*import {GET_DEMANDEBILLETS, GET_DEMANDEBILLET, EDIT_DEMANDEBILLET, ADD_DEMANDEBILLET, DELETE_DEMANDEBILLET, URL} from "../keys"
import axios from "axios"

export const getDEMANDEBILLETs = () => async (dispatch) => {
    const res = await axios.get(URL + "/DEMANDEBILLET/all")
    await dispatch({
        type: GET_DEMANDEBILLETS,
        data: res.data
    })

}

export const getRoomsFree = (obj) => async (dispatch) => {
     await axios.post(URL + "/DEMANDEBILLET/allFree", obj).then(re=>{
         console.log(re.data)
        dispatch({
            type: GET_DEMANDEBILLETS,
            data: re.data
        })
    }).catch(e=>{
        console.log(e)

    })


}

export const getDEMANDEBILLET = (id) => async (dispatch) => {
    await dispatch({
        type: GET_DEMANDEBILLET,
        data: id
    })

}
export const editDEMANDEBILLET = (id) => async (dispatch) => {
    await dispatch({
        type: EDIT_DEMANDEBILLET,
        data: id
    })
}
export const addDEMANDEBILLET = (u) => (dispatch) => {
    dispatch({
        type: ADD_DEMANDEBILLET,
        data: u
    })
}

export const deleteDEMANDEBILLET = (id) => (dispatch) => {
    dispatch({
        type: DELETE_DEMANDEBILLET,
        data: id
    })
}*/ 
import axios from "axios";
import http from "../http-common";
const DemandeBillet_API_BASE_URL = "http://localhost:8080/api/test/rest/DemandeBillets";
const DemandeBilletExceptionnelle_API_BASE_URL = "http://localhost:8080/api/test/rest/DemandeBilletsExceptionnelle"; 
const DemandeBilletCompagnieEtrangere_API_BASE_URL = "http://localhost:8080/api/test/rest/DemandeBilletsCompagnieEtrangere";
const DemandeBilletTunisairExpress_API_BASE_URL = "http://localhost:8080/api/test/rest/DemandeBilletsTunisairExpress";
const DemandeBillet3_API_BASE_URL = "http://localhost:8080/api/test/rest/DemandeBilletsSearch";

class DemandeBilletAction {

    getDemandeBilletsCompagnieEtrangere(){
        return axios.get(DemandeBilletCompagnieEtrangere_API_BASE_URL);
    }
    
    getDemandeBilletsDemandeBilletTunisairExpress(){
        return axios.get(DemandeBilletTunisairExpress_API_BASE_URL);
    }

    getDemandeBillets(){
        return axios.get(DemandeBillet_API_BASE_URL);
    }
    getDemandeBillets3(id){
        return axios.get("http://localhost:8080/api/test/rest/DemandeBilletsSearch?id="+id);
    }
    getDemandeBillets4(idPersonnel,typeBillet, parcours){  //dateAller, dateRetour){
        return axios.get("http://localhost:8080/api/test/rest/DemandeBilletsSearch1?idPersonnel="+idPersonnel+
        "&TypeBillet="+typeBillet+"&parcours="+parcours)
        
        /*"&dateAller="+dateAller+
        "&DateRetour="+dateRetour)*/
    }

    createDemandeBillet(DemandeBillet){
        return axios.post(DemandeBillet_API_BASE_URL, DemandeBillet);
    } 
    createDemandeBilletExceptionnelle(DemandeBillet){
        return axios.post(DemandeBilletExceptionnelle_API_BASE_URL, DemandeBillet);
    }

    getDemandeBilletById(DemandeBilletId){
        return axios.get(DemandeBillet_API_BASE_URL + '/' + DemandeBilletId);
    }

    updateDemandeBillet(DemandeBillet, DemandeBilletId){
        return axios.put(DemandeBillet_API_BASE_URL + '/' + DemandeBilletId, DemandeBillet);
    }

    deleteDemandeBillet(DemandeBilletId){
        return axios.delete(DemandeBillet_API_BASE_URL + '/' + DemandeBilletId);
    }
    
} 

export default new DemandeBilletAction();