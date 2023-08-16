import {} from "../keys"
import {GET_PARCOURS} from "../keys";

const initialState = {
    parcours: []

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PARCOURS:
            return {
                ...state,
                parcours: [action.data, ...state.parcours]
            }


        default: {
            return state
        }
    }
}