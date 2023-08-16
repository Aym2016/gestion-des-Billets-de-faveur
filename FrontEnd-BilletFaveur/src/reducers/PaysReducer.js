import {} from "../keys"
import {GET_PAYS} from "../keys";

const initialState = {
    pays: []

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PAYS:
            return {
                ...state,
                pays: [action.data, ...state.pays]
            }


        default: {
            return state
        }
    }
}