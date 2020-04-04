import authReducer from './authReducer'
import helpReducer from './helpReducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    help: helpReducer,
    firestore: firestoreReducer
})

export default rootReducer