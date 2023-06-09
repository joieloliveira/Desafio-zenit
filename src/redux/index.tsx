import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga"
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

export * from './actions'
export * from './types'