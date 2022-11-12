import { combineReducers } from 'redux'
import users from './users'
import city from './city'
import culinary from './culinary'
import culture from './culture'
import destination from './destination'
import marketplace from './marketplace'
import merchandise from './merchandise'
import videovr from './videovr'
import orders from './orders'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    users,
    city,
    culinary,
    culture,
    destination,
    marketplace,
    merchandise,
    videovr,
    orders,
    form: formReducer
})