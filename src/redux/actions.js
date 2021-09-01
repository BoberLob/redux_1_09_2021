import {
    INCREMENT,
    ASYNC_INCREMENT,
    DECREMENT,
    SET_USERS,
    FETCH_USERS,
    ASYNC_DECREMENT
} from './types'

export const incrementCreator = () => ({ type: INCREMENT })
export const asyncIncrementCreator = () => ({ type: ASYNC_INCREMENT })
export const decrementCreator = () => ({ type: DECREMENT })
export const asyncDecrementCreator = () => ({ type: ASYNC_DECREMENT })
export const setUsers = (payload) => ({ type: SET_USERS, payload })
export const fetchUsers = () => ({ type: FETCH_USERS })