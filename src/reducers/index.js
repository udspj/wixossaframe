import { combineReducers } from 'redux';
import deck from './deck'
import sample from './sample'

const reducers = combineReducers({
  deck,
  sample
})

export default reducers;