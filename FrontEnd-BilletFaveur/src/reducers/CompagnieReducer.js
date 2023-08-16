import { GET_COMPAGNIES } from "../keys"
import {GET_BUREAUX} from "../keys";

const initialState = {
    compagnies: []

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMPAGNIES:
            return {
                ...state,
                compagnies: [action.data, ...state.compagnies]
            }


        default: {
            return state
        }
    }
}