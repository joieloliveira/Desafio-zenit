import { combineReducers } from 'redux'
import { userDadosReducer } from './userDados'

const rootReducer = combineReducers({
    userDados: userDadosReducer,
})

export default rootReducer