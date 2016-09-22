import { combineReducers } from 'redux';
import play from './play-reducer';
import search from './search-reducer';

const rootReducer = combineReducers({
  play,
  search
});

export default rootReducer;
