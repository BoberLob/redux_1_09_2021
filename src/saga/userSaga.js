import { put, takeEvery, call } from 'redux-saga/effects'
import { setUsers } from '../redux/actions'
import { FETCH_USERS } from '../redux/types'
const fetchUsersFromAPI = () =>
    fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWolker() {
    const data = yield call(fetchUsersFromAPI)
    const json = yield call(res => res(data.json())
    yield put(setUsers(json))
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWolker)
}
