import {} from "../keys"
import {GET_MOTIF} from "../keys";

const initialState = {
    motis: []

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOTIF:
            return {
                ...state,
                motifs: [action.data, ...state.motifs]
            }


        default: {
            return state
        }
    }
}