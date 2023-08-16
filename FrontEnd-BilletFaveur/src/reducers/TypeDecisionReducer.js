import {} from "../keys"
import {GET_TYPEDECISION} from "../keys";

const initialState = {
    typedecisions: []

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TYPEDECISION:
            return {
                ...state,
                typedecisions: [action.data, ...state.typedecisions]
            }


        default: {
            return state
        }
    }
}