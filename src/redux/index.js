import basketReducer from './basketReducer'
import loginReducer from './loginReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    basket: basketReducer,
    username: loginReducer
})

export default allReducers
