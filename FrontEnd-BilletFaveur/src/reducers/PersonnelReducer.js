import {} from "../keys"
import {GET_PERSONNELS} from "../keys";

const initialState = {
    personnels: []

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PERSONNELS:
            return {
                ...state,
                bureaux: [action.data, ...state.personnels]
            }


        default: {
            return state
        }
    }
}