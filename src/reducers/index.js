import { combineReducers } from 'redux';
import deck from './deck'
import lrig from './lrig'
import sample from './sample'

const reducers = combineReducers({
  deck,
  lrig,
  sample
})

export default reducers;