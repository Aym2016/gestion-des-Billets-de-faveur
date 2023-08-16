import {} from "../keys"
import {GET_PIECEJUSTIFICATIVES} from "../keys";

const initialState = {
    piecejustificative: []

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PIECEJUSTIFICATIVES:
            return {
                ...state,
                bureaux: [action.data, ...state.piecejustificative]
            }


        default: {
            return state
        }
    }
}