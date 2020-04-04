import authReducer from './authReducer'
import helpReducer from './helpReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    help: helpReducer
})

export default rootReducer