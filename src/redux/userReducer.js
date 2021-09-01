import { SET_USERS } from './types'
const defaultState = {
    users: []
}

export function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload }
        default:
            return state
    }
}
