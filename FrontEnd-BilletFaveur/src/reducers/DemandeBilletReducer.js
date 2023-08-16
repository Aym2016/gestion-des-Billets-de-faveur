import {} from "../keys"
import {GET_DEMANDEBILLETS} from "../keys";

const initialState = {
    demandeBillets: []

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DEMANDEBILLETS:
            return {
                ...state,
                bureaux: [action.data, ...state.demandeBillets]
            }


        default: {
            return state
        }
    }
}