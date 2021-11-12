/* Consolidate all reducers */
import { basketReducer } from './basketReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  basket: basketReducer,
})

export default allReducers