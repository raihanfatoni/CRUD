import { combineReducers } from 'redux'
import users from './users'
import city from './city'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    users,
    city,
    form: formReducer
})