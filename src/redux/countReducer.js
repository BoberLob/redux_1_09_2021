import { INCREMENT, DECREMENT } from "./types"

const defaultState = {
    count: 0
}

export function countReducer(state = defaultState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state
    }

}

