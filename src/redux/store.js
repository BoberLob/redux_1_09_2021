import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './rootReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga/rootWatcher';


const sagaMiddleware = createSagaMiddleware()



export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher)