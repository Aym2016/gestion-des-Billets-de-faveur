import { GET_TYPEBILLETS } from "../keys"
//import {GET_BUREAUX} from "../keys";

const initialState = {
    typebillets: []

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TYPEBILLETS:
            return {
                ...state,
                typebillets: [action.data, ...state.typebillets]
            }


        default: {
            return state
        }
    }
}